import React from "react";
import { motion } from "motion/react";
import styles from "./StackFilter.module.css";

export type StackTrack = "all" | "python-ai" | "dotnet-iot";

interface StackFilterProps {
  activeTrack: StackTrack;
  onTrackChange: (track: StackTrack) => void;
}

export const StackFilter: React.FC<StackFilterProps> = ({ activeTrack, onTrackChange }) => {
  const tracks: { key: StackTrack; label: string; tag: string }[] = [
    { key: "all", label: "All Engineering", tag: "Complete Ledger" },
    { key: "python-ai", label: "Python & AI Systems", tag: "FastAPI · Bybit UTA · Async" },
    { key: "dotnet-iot", label: "C# / .NET & IoT", tag: "ASP.NET · Azure · Enterprise" },
  ];

  return (
    <div className={styles.filterRack} role="group" aria-label="Filter engineering tracks">
      <div className={styles.trackLabel}>
        <span className={styles.labelIndicator} />
        <span>ENGINEERING DISCIPLINE</span>
      </div>

      <div className={styles.buttonsCluster}>
        {tracks.map((track) => {
          const isActive = activeTrack === track.key;
          return (
            <button
              key={track.key}
              type="button"
              onClick={() => onTrackChange(track.key)}
              className={`${styles.filterButton} ${isActive ? styles.activeButton : ""}`}
              aria-pressed={isActive}
            >
              <span className={styles.buttonText}>{track.label}</span>
              <span className={styles.buttonMeta}>{track.tag}</span>
              {isActive && (
                <motion.div
                  layoutId="activeFilterHighlight"
                  className={styles.activePlaque}
                  transition={{ type: "spring", stiffness: 450, damping: 28 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
