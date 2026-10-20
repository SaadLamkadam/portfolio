"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, GitBranch, Cpu, ExternalLink, Terminal, ShieldAlert } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import styles from "./ProjectInstrument.module.css";

type TabKey = "overview" | "architecture" | "telemetry" | "simulator";

export const ProjectInstrument: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [simRiskStatus, setSimRiskStatus] = useState<"NORMAL" | "TRIGGERED">("NORMAL");
  const [latencyValue, setLatencyValue] = useState(142);

  const handleSimulateVolatility = () => {
    setSimRiskStatus("TRIGGERED");
    setLatencyValue(88);
    setTimeout(() => {
      setSimRiskStatus("NORMAL");
      setLatencyValue(142);
    }, 3200);
  };

  return (
    <motion.div
      className={styles.chassis}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Top Bevel & Instrument Label */}
      <div className={styles.topBezel}>
        <div className={styles.chassisBrand}>
          <div className={styles.screwHead} />
          <span className={styles.instrumentId}>INSTRUMENT UNIT · CLAWQUANT-01</span>
          <div className={styles.screwHead} />
        </div>

        <div className={styles.statusCluster}>
          <motion.div
            className={styles.ledIndicator}
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className={`${styles.ledDot} ${isPowerOn ? styles.ledGreen : styles.ledOff}`}
            />
            <span className={styles.ledLabel}>RUNTIME: 24/7 ACTIVE</span>
          </motion.div>

          <div className={styles.ledIndicator}>
            <span
              className={`${styles.ledDot} ${
                simRiskStatus === "TRIGGERED" ? styles.ledRed : styles.ledAmber
              }`}
            />
            <span className={styles.ledLabel}>
              {simRiskStatus === "TRIGGERED" ? "CIRCUIT BREAKER ENGAGED" : "RISK GATE: E1 NOMINAL"}
            </span>
          </div>
        </div>
      </div>

      {/* Tactile Push Tabs with Smooth Spring Motion */}
      <div className={styles.tabsRack}>
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`${styles.tactileTab} ${activeTab === "overview" ? styles.tabActive : ""}`}
        >
          <Activity size={13} className={styles.tabIcon} />
          <span>Overview</span>
          {activeTab === "overview" && (
            <motion.div
              layoutId="activeTabGlow"
              className={styles.tabGlowIndicator}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("architecture")}
          className={`${styles.tactileTab} ${activeTab === "architecture" ? styles.tabActive : ""}`}
        >
          <GitBranch size={13} className={styles.tabIcon} />
          <span>Architecture</span>
          {activeTab === "architecture" && (
            <motion.div
              layoutId="activeTabGlow"
              className={styles.tabGlowIndicator}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("telemetry")}
          className={`${styles.tactileTab} ${activeTab === "telemetry" ? styles.tabActive : ""}`}
        >
          <Cpu size={13} className={styles.tabIcon} />
          <span>Execution Path</span>
          {activeTab === "telemetry" && (
            <motion.div
              layoutId="activeTabGlow"
              className={styles.tabGlowIndicator}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("simulator")}
          className={`${styles.tactileTab} ${activeTab === "simulator" ? styles.tabActive : ""}`}
        >
          <ShieldAlert size={13} className={styles.tabIcon} />
          <span>Risk Test</span>
          {activeTab === "simulator" && (
            <motion.div
              layoutId="activeTabGlow"
              className={styles.tabGlowIndicator}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Recessed CRT / Enamel Display with Fade & Slide Transitions */}
      <div className={styles.recessedScreen}>
        <div className={styles.screenScanlines} aria-hidden="true" />

        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={styles.screenContent}
            >
              <div className={styles.projectHeader}>
                <div>
                  <span className={styles.specLabel}>FLAGSHIP PRODUCTION ARTERY</span>
                  <h3 className={styles.screenTitle}>ClawQuant Trade Engine</h3>
                </div>
                <span className={styles.environmentTag}>PROD // BYBIT UTA</span>
              </div>

              <p className={styles.screenDescription}>
                24/7 autonomous trade execution engine with strict deterministic risk gates,
                drawdown stop limits, and sub-second signal dispatch across perpetuals.
              </p>

              <div className={styles.specMetricsGrid}>
                <div className={styles.specBlock}>
                  <span className={styles.specKey}>RUNTIME LATENCY</span>
                  <span className={styles.specValue}>&lt; {latencyValue}ms Loop</span>
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
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
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
                <div className={styles.topoNode}>Signal Evaluator</div>
                <span className={styles.topoArrow}>→</span>
                <div className={`${styles.topoNode} ${styles.topoGate}`}>Risk Gate (E1)</div>
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
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
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
                <span className={styles.stackPill}>PostgreSQL</span>
              </div>

              <p className={styles.screenDescriptionSmall}>
                Zero-downtime execution with persistent double-entry accounting (.tmp to atomic rename)
                and autonomous self-healing telemetry.
              </p>
            </motion.div>
          )}

          {activeTab === "simulator" && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={styles.screenContent}
            >
              <div className={styles.projectHeader}>
                <div>
                  <span className={styles.specLabel}>INTERACTIVE RISK HARNESS</span>
                  <h3 className={styles.screenTitle}>Simulate Flash Cascade Event</h3>
                </div>
              </div>

              <p className={styles.screenDescriptionSmall}>
                Test the deterministic circuit breaker response. Triggering simulates extreme
                bid/ask spread blowout, automatically engaging the emergency hedge gate.
              </p>

              <div className={styles.simActionsRow}>
                <motion.button
                  type="button"
                  onClick={handleSimulateVolatility}
                  className={styles.simButton}
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                >
                  ⚡ Trigger Flash Volatility Spike
                </motion.button>

                <div className={styles.simStatusBadge}>
                  Status: <strong>{simRiskStatus}</strong>
                </div>
              </div>
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

        <motion.a
          href="https://github.com/saad-lamkadam"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.tactileConsoleLink}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <GithubIcon size={13} />
          <span>Inspect Architecture</span>
          <ExternalLink size={11} />
        </motion.a>
      </div>
    </motion.div>
  );
};
