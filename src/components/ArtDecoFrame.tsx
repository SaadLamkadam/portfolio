import React from "react";
import styles from "./ArtDecoFrame.module.css";

interface ArtDecoFrameProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export const ArtDecoFrame: React.FC<ArtDecoFrameProps> = ({
  children,
  className = "",
  label,
}) => {
  return (
    <div className={`${styles.frameOuter} ${className}`}>
      {/* Art Deco Stepped Corner Insets */}
      <span className={`${styles.cornerStep} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.cornerStep} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.cornerStep} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.cornerStep} ${styles.br}`} aria-hidden="true" />

      {/* Thin Geometric Dual Border */}
      <div className={styles.innerBezel}>
        {label && (
          <div className={styles.frameHeader}>
            <span className={styles.headerLine} />
            <span className={styles.frameLabel}>{label}</span>
            <span className={styles.headerLine} />
          </div>
        )}
        <div className={styles.frameContent}>{children}</div>
      </div>
    </div>
  );
};
