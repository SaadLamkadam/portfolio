import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Schematic } from "@/components/Schematic";
import { ArrowLeft, ExternalLink, ShieldCheck, Cpu, Terminal, GitBranch } from "lucide-react";
import styles from "./dossier.module.css";

export const metadata = {
  title: "ClawQuant Trade Engine Dossier — Saad Lamkadam",
  description:
    "Architectural deep-dive: 24/7 deterministic trade execution engine, circuit breakers, and sub-second signal dispatch on Bybit UTA.",
};

export default function ClawQuantDossier() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/#work" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Return to Systems Index</span>
          </Link>

          <header className={styles.header}>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>PRODUCTION SYSTEM · SPECIFICATION</span>
              <span className={styles.badgeDate}>2024 — PRESENT</span>
            </div>
            <h1 className={styles.title}>ClawQuant Trade Execution Engine</h1>
            <p className={styles.lead}>
              24/7 autonomous high-frequency trade execution engine featuring deterministic circuit breakers,
              strict maximum drawdown stops, and sub-second signal dispatch across crypto perpetuals on Bybit UTA.
            </p>
          </header>

          <div className={styles.schematicBox}>
            <h2 className={styles.boxTitle}>
              <GitBranch size={16} className={styles.boxIcon} />
              <span>Data Pipeline & Risk Invariant Topology</span>
            </h2>
            <div className={styles.schematicWrapper}>
              <Schematic
                nodes={["Tick Stream", "Signal Eval", "Risk Gate (E1)", "Order Router", "Exchange UTA"]}
                gate={2}
                title="ClawQuant Deterministic Execution Path"
              />
            </div>
          </div>

          <div className={styles.specsGrid}>
            <div className={styles.specCard}>
              <h3 className={styles.cardHeading}>
                <ShieldCheck size={16} className={styles.cardIcon} />
                <span>Deterministic Risk Gates</span>
              </h3>
              <p className={styles.cardText}>
                Every order intent must pass through an immutable pre-trade gate. If equity drawdown breaches
                3.5% or bid/ask spread exceeds 12 bps, the hardware circuit breaker immediately halts execution
                and initiates atomic hedges.
              </p>
            </div>

            <div className={styles.specCard}>
              <h3 className={styles.cardHeading}>
                <Cpu size={16} className={styles.cardIcon} />
                <span>Sub-150ms Execution Loop</span>
              </h3>
              <p className={styles.cardText}>
                Built on Python 3.12, AsyncIO event loops, and zero-allocation message parsing. WebSocket orderbook
                ticks are evaluated in under 4ms, routing limit maker orders with sub-150ms round-trip latency.
              </p>
            </div>

            <div className={styles.specCard}>
              <h3 className={styles.cardHeading}>
                <Terminal size={16} className={styles.cardIcon} />
                <span>Atomic State Persistence</span>
              </h3>
              <p className={styles.cardText}>
                Double-entry order journaling ensures zero state loss across unexpected process restarts. State writes
                execute via atomic `.tmp` file renames to prevent partial corruption during power outages.
              </p>
            </div>
          </div>

          <div className={styles.codeSection}>
            <h2 className={styles.boxTitle}>
              <Terminal size={16} className={styles.boxIcon} />
              <span>Deterministic Gate Invariant (Sanitized Core)</span>
            </h2>
            <pre className={styles.codeBlock}>
              <code>{`# ClawQuant Deterministic Gate Invariant (Core Evaluation Loop)
def evaluate_order(intent: OrderIntent, thresholds: RiskThresholds) -> tuple[bool, str]:
    # Invariant 1: Hard Drawdown Ceiling
    drawdown = (intent.peak_equity - intent.current_equity) / intent.peak_equity
    if drawdown >= thresholds.max_drawdown_pct:
        return False, "GATE_BREACH_MAX_DRAWDOWN"

    # Invariant 2: Spread Cascade Anomaly
    spread_bps = ((intent.ask - intent.bid) / intent.mid_price) * 10000.0
    if spread_bps > thresholds.max_spread_bps:
        return False, "GATE_BREACH_SPREAD_BLOWOUT"

    # Invariant 3: Velocity Throttling
    if (time.time() * 1000.0 - intent.last_order_ts) < thresholds.min_interval_ms:
        return False, "GATE_THROTTLE_VELOCITY"

    return True, "GATE_NOMINAL_EXECUTE"`}</code>
            </pre>
          </div>

          <footer className={styles.dossierFooter}>
            <a
              href="https://github.com/saad-lamkadam"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>Inspect Source on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}
