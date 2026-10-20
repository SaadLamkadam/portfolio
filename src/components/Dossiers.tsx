"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Schematic } from "./Schematic";
import styles from "./Dossiers.module.css";

export type Dossier = {
  id: string;
  title: string;
  when: string;
  text: string;
  stack: string;
  details: string[];
  schematic: { title: string; nodes: string[]; gate?: number };
  link?: { href: string; label: string };
};

const SPRING = { type: "spring", stiffness: 450, damping: 28 } as const;

// Project case files that unfold in place; the others dim while one is open.
export function Dossiers({ items }: { items: Dossier[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={styles.list}>
      {items.map((d) => {
        const isOpen = open === d.id;
        const dimmed = open !== null && !isOpen;
        return (
          <motion.article
            key={d.id}
            className={styles.dossier}
            animate={{ opacity: dimmed ? 0.5 : 1 }}
            transition={{ duration: 0.22 }}
          >
            <span className={`${styles.rivet} ${styles.tl}`} aria-hidden="true" />
            <span className={`${styles.rivet} ${styles.tr}`} aria-hidden="true" />
            <span className={`${styles.rivet} ${styles.bl}`} aria-hidden="true" />
            <span className={`${styles.rivet} ${styles.br}`} aria-hidden="true" />

            <h3 className={styles.title}>{d.title}</h3>
            <p className={styles.when}>{d.when}</p>
            <p className={styles.text}>{d.text}</p>
            <p className={styles.stack}>{d.stack}</p>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.toggle}
                aria-expanded={isOpen}
                aria-controls={`${d.id}-file`}
                onClick={() => setOpen(isOpen ? null : d.id)}
              >
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={SPRING} className={styles.toggleIcon}>
                  <Plus size={16} aria-hidden="true" />
                </motion.span>
                {isOpen ? "Close the dossier" : "Open the dossier"}
              </button>
              {d.link && (
                <a href={d.link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {d.link.label}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              )}
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${d.id}-file`}
                  key="file"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={SPRING}
                  className={styles.fileWrap}
                >
                  <div className={styles.file}>
                    <Schematic title={d.schematic.title} nodes={d.schematic.nodes} gate={d.schematic.gate} />
                    <ul className={styles.details}>
                      {d.details.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}
