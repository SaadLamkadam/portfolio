"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./TactileButton.module.css";

interface TactileButtonProps {
  children: React.ReactNode;
  variant?: "brass" | "enamel" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const TactileButton: React.FC<TactileButtonProps> = ({
  children,
  variant = "brass",
  size = "md",
  href,
  onClick,
  icon,
  className = "",
  download,
  target,
  rel,
}) => {
  const buttonContent = (
    <div className={styles.innerCapsule}>
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      <span className={styles.highlightGlint} aria-hidden="true" />
    </div>
  );

  const combinedClass = `${styles.tactileButton} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={combinedClass}
        download={download}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        whileHover={{ translateY: -1 }}
        whileTap={{ translateY: 2, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={combinedClass}
      whileHover={{ translateY: -1 }}
      whileTap={{ translateY: 2, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 450, damping: 20 }}
    >
      {buttonContent}
    </motion.button>
  );
};
