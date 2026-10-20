import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Schematic } from "@/components/Schematic";
import { ArrowLeft, Zap, Shield, Database, Activity } from "lucide-react";
import styles from "../clawquant/dossier.module.css";

export const metadata = {
  title: "REACH IoT Telemetry Platform Dossier — Saad Lamkadam",
  description:
    "Architectural deep-dive: EU-funded real-time energy management telemetry across hospitality sites using ASP.NET Core & SQL Server.",
};

export default function ReachIotDossier() {
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
              <span className={styles.badge}>EU-FUNDED INITIATIVE · REACH PROJECT</span>
              <span className={styles.badgeDate}>2023 — 2025</span>
            </div>
            <h1 className={styles.title}>REACH IoT Energy Telemetry Platform</h1>
            <p className={styles.lead}>
              Architected backend telemetry ingestion, database schema, and live sensor stream processing for hotel
              energy systems across Europe, operating 24/7 under strict GDPR isolation boundaries.
            </p>
          </header>

          <div className={styles.schematicBox}>
            <h2 className={styles.boxTitle}>
              <Activity size={16} className={styles.boxIcon} />
              <span>Multi-Site Telemetry Ingestion Pipeline</span>
            </h2>
            <div className={styles.schematicWrapper}>
              <Schematic
                nodes={["Hotel Sensors", "Stream Ingest", "ASP.NET Core API", "SQL Server Clustered", "Automated Alerts"]}
                gate={3}
                title="REACH Telemetry Ingestion Path"
              />
            </div>
          </div>

          <div className={styles.specsGrid}>
            <div className={styles.specCard}>
              <h3 className={styles.cardHeading}>
                <Zap size={16} className={styles.cardIcon} />
                <span>75% Alert Triage Reduction</span>
              </h3>
              <p className={styles.cardText}>
                Engineered automated self-healing alert logic. By clustering transient sensor dropouts and correlating
                micro-voltage fluctuations, manual engineering interventions were reduced by 75%.
              </p>
            </div>

            <div className={styles.specCard}>
              <h3 className={styles.cardHeading}>
                <Database size={16} className={styles.cardIcon} />
                <span>28% Uptime Improvement</span>
              </h3>
              <p className={styles.cardText}>
                Redesigned the relational storage tier in SQL Server with partitioned time-series indexes and automated
                health heartbeats, lifting overall network availability by 28% across high-occupancy European hotels.
              </p>
            </div>

            <div className={styles.specCard}>
              <h3 className={styles.cardHeading}>
                <Shield size={16} className={styles.cardIcon} />
                <span>GDPR Multi-Tenant Hardening</span>
              </h3>
              <p className={styles.cardText}>
                Implemented cryptographic tenant isolation and automated data retention policies, satisfying strict
                EU cross-border data protection requirements without adding query overhead.
              </p>
            </div>
          </div>

          <footer className={styles.dossierFooter}>
            <span className={styles.clientTag}>Deployed by Sens Innovation Ltd / Llobeno Ltd · Gzira, Malta</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
