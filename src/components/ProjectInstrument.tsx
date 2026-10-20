"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Shield, Zap, Activity, ExternalLink, GitBranch, Cpu } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import styles from "./ProjectInstrument.module.css";

type TabKey = "overview" | "architecture" | "telemetry";

export const ProjectInstrument: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [isPowerOn, setIsPowerOn] = useState(true);

  return (
    <div className={styles.chassis}>
      {/* Top Bevel & Instrument Label */}
      <div className={styles.topBezel}>
        <div className={styles.chassisBrand}>
          <div className={styles.screwHead} />
          <span className={styles.instrumentId}>INSTRUMENT UNIT · CLAWQUANT-01</span>
          <div className={styles.screwHead} />
        </div>

        <div className={styles.statusCluster}>
          <div className={styles.ledIndicator}>
            <span
              className={`${styles.ledDot} ${isPowerOn ? styles.ledGreen : styles.ledOff}`}
            />
            <span className={styles.ledLabel}>RUNTIME ACTIVE</span>
          </div>

          <div className={styles.ledIndicator}>
            <span className={`${styles.ledDot} ${styles.ledAmber}`} />
            <span className={styles.ledLabel}>RISK GATE: E1</span>
          </div>
        </div>
      </div>

      {/* Tactile Push Tabs */}
      <div className={styles.tabsRack}>
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`${styles.tactileTab} ${activeTab === "overview" ? styles.tabActive : ""}`}
        >
          <Activity size={13} className={styles.tabIcon} />
          <span>Overview</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("architecture")}
          className={`${styles.tactileTab} ${activeTab === "architecture" ? styles.tabActive : ""}`}
        >
          <GitBranch size={13} className={styles.tabIcon} />
          <span>Architecture</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("telemetry")}
          className={`${styles.tactileTab} ${activeTab === "telemetry" ? styles.tabActive : ""}`}
        >
          <Cpu size={13} className={styles.tabIcon} />
          <span>Execution Path</span>
        </button>
      </div>

      {/* Recessed CRT / Enamel Display */}
      <div className={styles.recessedScreen}>
        <div className={styles.screenScanlines} aria-hidden="true" />

        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className={styles.screenContent}
            >
              <div className={styles.projectHeader}>
                <div>
                  <span className={styles.specLabel}>FLAGSHIP PRODUCTION ARTERY</span>
                  <h3 className={styles.screenTitle}>ClawQuant Algorithmic Trading Engine</h3>
                </div>
                <span className={styles.environmentTag}>PROD // BYBIT UTA</span>
              </div>

              <p className={styles.screenDescription}>
                24/7 autonomous trade execution engine with strict deterministic risk gates,
                drawdown stop limits, and sub-second signal dispatch across crypto perpetuals.
              </p>

              <div className={styles.specMetricsGrid}>
                <div className={styles.specBlock}>
                  <span className={styles.specKey}>RUNTIME LATENCY</span>
                  <span className={styles.specValue}>&lt; 150ms Loop</span>
                </div>
                <div className={styles.specBlock}>
                  <span className={styles.specKey}>EXECUTION MODE</span>
                  <span className={styles.specValue}>Strict Maker-Only</span>
                </div>
                <div className={styles.specBlock}>
                  <span className={styles.specKey}>RISK GOVERNOR</span>
                  <span className={styles.specValue}>Conformal Safe Exit</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className={styles.screenContent}
            >
              <div className={styles.projectHeader}>
                <div>
                  <span className={styles.specLabel}>SYSTEM TOPOLOGY</span>
                  <h3 className={styles.screenTitle}>Deterministic State Pipeline</h3>
                </div>
              </div>

              <div className={styles.topologyDiagram}>
                <div className={styles.topoNode}>WebSocket Tick Stream</div>
                <span className={styles.topoArrow}>→</span>
                <div className={styles.topoNode}>Async Signal Evaluator</div>
                <span className={styles.topoArrow}>→</span>
                <div className={`${styles.topoNode} ${styles.topoGate}`}>Risk Gate</div>
                <span className={styles.topoArrow}>→</span>
                <div className={styles.topoNode}>Order Router</div>
              </div>

              <div className={styles.terminalSnippet}>
                <span className={styles.termComment}>// Atomic Double-Entry Ledger State</span>
                <span className={styles.termLine}>[STATE] Invariant Floor: Bedrock Protected</span>
                <span className={styles.termLine}>[ORDER] DUAL-PROD-BTCUSDT-1729432000214</span>
              </div>
            </motion.div>
          )}

          {activeTab === "telemetry" && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className={styles.screenContent}
            >
              <div className={styles.projectHeader}>
                <div>
                  <span className={styles.specLabel}>DEPLOYMENT SPECIFICATION</span>
                  <h3 className={styles.screenTitle}>Production Stack & Guardrails</h3>
                </div>
              </div>

              <div className={styles.stackPillsRow}>
                <span className={styles.stackPill}>Python 3.12</span>
                <span className={styles.stackPill}>FastAPI</span>
                <span className={styles.stackPill}>AsyncIO</span>
                <span className={styles.stackPill}>Docker Container</span>
                <span className={styles.stackPill}>Redis Cache</span>
              </div>

              <p className={styles.screenDescriptionSmall}>
                Integrated with persistent double-entry accounting (.tmp to atomic rename) and
                real-time circuit breaker triggers on volatility cascade conditions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Chassis Controls & Direct Verification Link */}
      <div className={styles.bottomBezel}>
        <div className={styles.bottomMeta}>
          <span className={styles.metaLabel}>SOURCE STATUS</span>
          <span className={styles.metaValue}>VERIFIED REPOSITORY</span>
        </div>

        <a
          href="https://github.com/saad-lamkadam"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.tactileConsoleLink}
        >
          <GithubIcon size={13} />
          <span>Inspect Architecture</span>
          <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
};
