"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Falcon } from "./Falcon";
import { Schematic } from "./Schematic";
import styles from "./ProjectInstrument.module.css";

type SystemKey = "clawquant" | "reach";
type TabKey = "overview" | "schematic" | "extra";

const SPRING = { type: "spring", stiffness: 450, damping: 28 } as const;
const FADE = { duration: 0.22, ease: [0.16, 1, 0.3, 1] } as const;
const TRIP_MS = 3200;

// Only facts already stated on the page; the risk test is labelled as a browser simulation.
const SYSTEMS = {
  clawquant: {
    name: "ClawQuant",
    id: "clawquant · prod",
    title: "Autonomous execution on Bybit perpetuals",
    specs: [
      ["signal loop", "< 150 ms"],
      ["execution", "maker-only"],
      ["risk exit", "conformal gate"],
    ],
    schematic: { title: "ClawQuant order path", nodes: ["Tick stream", "Signal eval", "Risk gate", "Order router"], gate: 2 },
    extraTab: "Risk test",
  },
  reach: {
    name: "REACH IoT",
    id: "reach · hotels",
    title: "Energy telemetry across hotel sites, 24/7",
    specs: [
      ["manual work", "−75%"],
      ["uptime", "+28%"],
      ["compliance", "GDPR"],
    ],
    schematic: { title: "REACH telemetry path", nodes: ["Sensors", "Stream proc.", "ASP.NET API", "SQL Server", "Alerts"] },
    extraTab: "Stack",
  },
} as const;

export const ProjectInstrument: React.FC = () => {
  const [system, setSystem] = useState<SystemKey>("clawquant");
  const [tab, setTab] = useState<TabKey>("overview");
  const [tripped, setTripped] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const s = SYSTEMS[system];

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const selectSystem = (next: SystemKey) => {
    setSystem(next);
    setTab("overview");
    setTripped(false);
  };

  const tripBreaker = () => {
    setTripped(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setTripped(false), TRIP_MS);
  };

  return (
    <div className={`${styles.chassis} ${tripped ? styles.isTripped : ""}`} data-ui>
      <span className={`${styles.rivet} ${styles.rTl}`} aria-hidden="true" />
      <span className={`${styles.rivet} ${styles.rTr}`} aria-hidden="true" />
      <span className={`${styles.rivet} ${styles.rBl}`} aria-hidden="true" />
      <span className={`${styles.rivet} ${styles.rBr}`} aria-hidden="true" />

      <div className={styles.topBar}>
        <div className={styles.identity}>
          <span className={styles.instrumentId}>{s.id}</span>
          <span className={styles.status}>
            <span className={`${styles.led} ${tripped ? styles.ledRed : styles.ledGreen}`} aria-hidden="true" />
            {tripped ? "breaker tripped · orders blocked" : "runtime 24/7"}
          </span>
        </div>
        <Falcon className={styles.crest} state={tripped ? "tripped" : "nominal"} />
      </div>

      {/* Rotary selector: the knob turns between the two systems */}
      <div className={styles.selector} role="radiogroup" aria-label="Choose the system shown">
        <button
          type="button"
          role="radio"
          aria-checked={system === "clawquant"}
          className={styles.position}
          onClick={() => selectSystem("clawquant")}
        >
          ClawQuant
        </button>
        <motion.button
          type="button"
          className={styles.knob}
          aria-label={`Turn to ${system === "clawquant" ? "REACH IoT" : "ClawQuant"}`}
          onClick={() => selectSystem(system === "clawquant" ? "reach" : "clawquant")}
          animate={{ rotate: system === "clawquant" ? -50 : 50 }}
          transition={SPRING}
        >
          <span className={styles.pointer} />
        </motion.button>
        <button
          type="button"
          role="radio"
          aria-checked={system === "reach"}
          className={styles.position}
          onClick={() => selectSystem("reach")}
        >
          REACH IoT
        </button>
      </div>

      <div className={styles.tabsRack} role="tablist" aria-label={`${s.name} details`}>
        {(["overview", "schematic", "extra"] as TabKey[]).map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`${styles.tab} ${tab === t ? styles.tabActive : ""}`}
          >
            {t === "overview" ? "Overview" : t === "schematic" ? "Schematic" : s.extraTab}
          </button>
        ))}
      </div>

      <div className={styles.screen} role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${system}-${tab}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={FADE}
            className={styles.screenContent}
          >
            {tab === "overview" && (
              <>
                <p className={styles.screenTitle}>{s.title}</p>
                <dl className={styles.specGrid}>
                  {s.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {tab === "schematic" && (
              <>
                <p className={styles.screenTitle}>{s.schematic.title}</p>
                <Schematic {...s.schematic} />
                {system === "clawquant" && (
                  <pre className={styles.log}>
                    <code>{`[state] equity floor: protected\n[order] DUAL-PROD-BTCUSDT-1729432000214`}</code>
                  </pre>
                )}
              </>
            )}

            {tab === "extra" && system === "clawquant" && (
              <>
                <p className={styles.screenTitle}>Circuit-breaker drill</p>
                <p className={styles.screenNote}>
                  A simulation that runs in your browser, with no connection to the live engine. It shows
                  what happens on a volatility cascade: the breaker trips and no new order leaves the router
                  until conditions reset.
                </p>
                <div className={styles.simRow}>
                  <button type="button" onClick={tripBreaker} className={styles.simButton} disabled={tripped}>
                    {tripped ? "Breaker tripped…" : "Run simulated breaker trip"}
                  </button>
                  <span className={styles.simStatus} aria-live="polite">
                    {tripped ? "Orders blocked" : "Gate nominal"}
                  </span>
                </div>
              </>
            )}

            {tab === "extra" && system === "reach" && (
              <>
                <p className={styles.screenTitle}>Production stack</p>
                <ul className={styles.stackList}>
                  {["ASP.NET Core", "SQL Server", "REST APIs", "GDPR hardening"].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
