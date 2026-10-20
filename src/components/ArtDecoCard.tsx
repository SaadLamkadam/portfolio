"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./ArtDecoCard.module.css";

interface ArtDecoCardProps {
  children: React.ReactNode;
  title?: string;
  badge?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const ArtDecoCard: React.FC<ArtDecoCardProps> = ({
  children,
  title,
  badge,
  icon,
  className = "",
}) => {
  return (
    <motion.div
      className={`${styles.cardPlate} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Decorative Brass Rivets / Corner Inlays */}
      <div className={`${styles.cornerBolt} ${styles.topLeft}`} />
      <div className={`${styles.cornerBolt} ${styles.topRight}`} />
      <div className={`${styles.cornerBolt} ${styles.bottomLeft}`} />
      <div className={`${styles.cornerBolt} ${styles.bottomRight}`} />

      {/* Internal stepped border line */}
      <div className={styles.innerBezel}>
        {(title || badge || icon) && (
          <div className={styles.cardHeader}>
            <div className={styles.titleGroup}>
              {icon && <div className={styles.iconTray}>{icon}</div>}
              {title && <h3 className={styles.cardTitle}>{title}</h3>}
            </div>
            {badge && <span className={styles.cardBadge}>{badge}</span>}
          </div>
        )}
        <div className={styles.cardBody}>{children}</div>
      </div>
    </motion.div>
  );
};
