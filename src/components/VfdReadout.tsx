"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./VfdReadout.module.css";

type VfdReadoutProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const DURATION = 1200;
const fmt = (n: number) => n.toLocaleString("en-GB");

// Amber vacuum-fluorescent readout. Renders the real value on the server; ticks up from zero
// the first time it scrolls into view.
export function VfdReadout({ value, prefix = "", suffix = "", label }: VfdReadoutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 4);
          setShown(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div ref={ref} className={styles.readout}>
      <span className={styles.tube} aria-hidden="true">
        {prefix}
        {fmt(shown)}
        {suffix}
      </span>
      <span className={styles.srOnly}>
        {prefix}
        {fmt(value)}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
