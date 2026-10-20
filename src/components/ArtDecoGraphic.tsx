import React from "react";
import styles from "./ArtDecoGraphic.module.css";

interface ArtDecoGraphicProps {
  type?: "chevron" | "sunburst-minimal" | "crest";
  className?: string;
}

export const ArtDecoGraphic: React.FC<ArtDecoGraphicProps> = ({
  type = "chevron",
  className = "",
}) => {
  if (type === "crest") {
    return (
      <svg
        viewBox="0 0 60 60"
        className={`${styles.crestSvg} ${className}`}
        fill="none"
        aria-hidden="true"
      >
        <polygon points="30,4 56,18 56,42 30,56 4,42 4,18" stroke="var(--brass-accent)" strokeWidth="1.2" />
        <polygon points="30,10 50,21 50,39 30,50 10,39 10,21" stroke="var(--brass-muted)" strokeWidth="0.8" strokeDasharray="3 2" />
        <text
          x="30"
          y="35"
          textAnchor="middle"
          fill="var(--ink-primary)"
          fontFamily="var(--font-mono)"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
        >
          SL
        </text>
      </svg>
    );
  }

  if (type === "sunburst-minimal") {
    return (
      <svg
        viewBox="0 0 160 32"
        className={`${styles.sunburstSvg} ${className}`}
        fill="none"
        aria-hidden="true"
      >
        <line x1="80" y1="2" x2="80" y2="24" stroke="var(--brass-accent)" strokeWidth="1.2" />
        <line x1="72" y1="8" x2="64" y2="26" stroke="var(--brass-line)" strokeWidth="1" />
        <line x1="88" y1="8" x2="96" y2="26" stroke="var(--brass-line)" strokeWidth="1" />
        <line x1="62" y1="14" x2="50" y2="28" stroke="var(--canvas-border-strong)" strokeWidth="0.8" />
        <line x1="98" y1="14" x2="110" y2="28" stroke="var(--canvas-border-strong)" strokeWidth="0.8" />
        <polygon points="80,24 84,30 80,36 76,30" fill="var(--brass-accent)" />
      </svg>
    );
  }

  return (
    <div className={`${styles.chevronDivider} ${className}`} aria-hidden="true">
      <div className={styles.lineLeft} />
      <div className={styles.steppedChevron}>
        <span className={styles.outerDiamond} />
        <span className={styles.innerDiamond} />
      </div>
      <div className={styles.lineRight} />
    </div>
  );
};
