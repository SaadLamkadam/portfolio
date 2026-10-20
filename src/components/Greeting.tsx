"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./Greeting.module.css";

type Greeting = { lang: string; label: string; word: string; dir?: "rtl" };

// The five languages Saad speaks, in the order of his CV.
const GREETINGS: Greeting[] = [
  { lang: "en", label: "English", word: "Hello," },
  { lang: "mt", label: "Malti", word: "Bonġu," },
  { lang: "it", label: "Italiano", word: "Ciao," },
  { lang: "fr", label: "Français", word: "Bonjour," },
  { lang: "ar", label: "العربية", word: "مرحبا،", dir: "rtl" },
];

const CYCLE_MS = 2800;

type GreetingState = { index: number; pick: (i: number) => void };
const GreetingContext = createContext<GreetingState>({ index: 0, pick: () => {} });

export function GreetingProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (picked || reduceMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % GREETINGS.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [picked, reduceMotion]);

  const pick = (i: number) => {
    setPicked(true);
    setIndex(i);
  };

  return <GreetingContext.Provider value={{ index, pick }}>{children}</GreetingContext.Provider>;
}

export function GreetingWord() {
  const { index } = useContext(GreetingContext);
  const g = GREETINGS[index];

  return (
    <span className={styles.wordSlot} aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={g.lang}
          lang={g.lang}
          dir={g.dir ?? "ltr"}
          className={styles.word}
          initial={{ opacity: 0, y: "0.25em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.25em" }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          {g.word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function LanguagePicker() {
  const { index, pick } = useContext(GreetingContext);

  return (
    <div className={styles.picker} role="group" aria-label="Choose the greeting language">
      <span className={styles.pickerLabel}>Say hello in</span>
      <div className={styles.options}>
        {GREETINGS.map((g, i) => (
          <button
            key={g.lang}
            type="button"
            lang={g.lang}
            dir={g.dir ?? "ltr"}
            aria-pressed={i === index}
            onClick={() => pick(i)}
            className={styles.option}
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  );
}
