import React from "react";
import styles from "./ArtDecoMotif.module.css";

interface ArtDecoMotifProps {
  type?: "divider" | "corner" | "crest" | "sunburst";
  className?: string;
}

export const ArtDecoMotif: React.FC<ArtDecoMotifProps> = ({
  type = "divider",
  className = "",
}) => {
  if (type === "crest") {
    return (
      <div className={`${styles.crestContainer} ${className}`} aria-hidden="true">
        <svg viewBox="0 0 120 120" className={styles.crestSvg} fill="none">
          {/* Stepped chevron outer shield */}
          <polygon
            points="60,8 112,38 112,82 60,112 8,82 8,38"
            stroke="url(#brassGrad)"
            strokeWidth="2"
          />
          <polygon
            points="60,16 104,42 104,78 60,104 16,78 16,42"
            stroke="url(#brassGrad)"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          {/* Internal diamond */}
          <polygon
            points="60,28 92,60 60,92 28,60"
            stroke="url(#brassGrad)"
            strokeWidth="1.5"
            fill="rgba(212, 175, 55, 0.05)"
          />
          {/* Monogram letters S & L stylized */}
          <text
            x="60"
            y="68"
            textAnchor="middle"
            fill="url(#brassGrad)"
            fontSize="26"
            fontFamily="var(--font-heading)"
            fontWeight="bold"
            letterSpacing="2"
          >
            SL
          </text>
          <defs>
            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8df9e" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#634f19" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === "sunburst") {
    return (
      <div className={`${styles.sunburstContainer} ${className}`} aria-hidden="true">
        <svg viewBox="0 0 200 40" className={styles.sunburstSvg} fill="none">
          <path d="M100 0 L100 30" stroke="url(#brassGrad2)" strokeWidth="1.5" />
          <path d="M90 10 L80 32" stroke="url(#brassGrad2)" strokeWidth="1" />
          <path d="M110 10 L120 32" stroke="url(#brassGrad2)" strokeWidth="1" />
          <path d="M78 15 L62 34" stroke="url(#brassGrad2)" strokeWidth="1" />
          <path d="M122 15 L138 34" stroke="url(#brassGrad2)" strokeWidth="1" />
          <path d="M65 22 L45 36" stroke="url(#brassGrad2)" strokeWidth="1" />
          <path d="M135 22 L155 36" stroke="url(#brassGrad2)" strokeWidth="1" />
          <polygon points="100,28 106,35 100,42 94,35" fill="url(#brassGrad2)" />
          <defs>
            <linearGradient id="brassGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#aa8628" />
              <stop offset="50%" stopColor="#f8df9e" />
              <stop offset="100%" stopColor="#aa8628" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Default: divider
  return (
    <div className={`${styles.divider} ${className}`} aria-hidden="true">
      <div className={styles.lineLeft} />
      <div className={styles.steppedDiamond}>
        <div className={styles.diamondInner} />
      </div>
      <div className={styles.lineRight} />
    </div>
  );
};
