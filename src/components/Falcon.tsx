import React from "react";
import styles from "./Falcon.module.css";

type FalconProps = {
  className?: string;
  /** Eye LED: amber breathing while nominal, crimson when a breaker trips. */
  state?: "nominal" | "tripped" | "off";
  speedlines?: boolean;
};

// Faceted peregrine falcon head, drawn as brass hairline facets (Pompon / Cassandre school).
export const Falcon: React.FC<FalconProps> = ({ className = "", state = "nominal", speedlines = true }) => (
  <svg viewBox="0 0 72 60" className={`${styles.falcon} ${className}`} fill="none" aria-hidden="true">
    {speedlines && (
      <g className={styles.speed}>
        <path d="M0 22H12M2 28H10M4 34H9" />
      </g>
    )}
    <g className={styles.facets}>
      <path d="M14 34 26 16 42 10 56 14 64 24 58 26 56 32 50 30 46 38 52 50 36 56 20 50Z" />
      <path d="M26 16 42 26 14 34M42 10 42 26 46 38M42 26 56 32M20 50 42 26 36 56" />
      <path className={styles.malar} d="M42 26 38 42 42 44 46 30Z" />
      <path className={styles.beak} d="M56 14 64 24 58 26 56 20Z" />
    </g>
    <circle className={`${styles.eye} ${styles[state]}`} cx="47" cy="21" r="2.6" />
  </svg>
);
