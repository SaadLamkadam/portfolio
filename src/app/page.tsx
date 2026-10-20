"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ArtDecoMotif } from "@/components/ArtDecoMotif";
import { ArtDecoCard } from "@/components/ArtDecoCard";
import { TactileButton } from "@/components/TactileButton";
import { motion } from "motion/react";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Terminal,
  Globe,
  Award,
  Layers,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  Database,
  Server,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import styles from "./page.module.css";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saad.lamkadam@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* HERO SECTION */}
        <section id="overview" className={styles.heroSection}>
          <ArtDecoMotif type="sunburst" />

          <motion.div
            className={styles.heroPlaque}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Corner brass rosettes */}
            <div className={`${styles.cornerRosette} ${styles.tl}`} />
            <div className={`${styles.cornerRosette} ${styles.tr}`} />
            <div className={`${styles.cornerRosette} ${styles.bl}`} />
            <div className={`${styles.cornerRosette} ${styles.br}`} />

            <div className={styles.heroInner}>
              <div className={styles.statusRow}>
                <span className={styles.statusPill}>
                  <ShieldCheck size={14} className={styles.pillIcon} />
                  EU Family Member · Unrestricted EU/EEA Work Authorization
                </span>
                <span className={styles.statusPill}>
                  <CheckCircle size={14} className={styles.pillIcon} />
                  Jobsplus Disability Reg. No. 10363
                </span>
                <span className={styles.statusPill}>
                  <MapPin size={14} className={styles.pillIcon} />
                  Gzira, Malta
                </span>
              </div>

              <h1 className={styles.heroTitle}>SAAD (JAKE) LAMKADAM</h1>

              <div className={styles.heroSubtitleWrapper}>
                <span className={styles.bracketLeft}>[</span>
                <h2 className={styles.heroSubtitle}>
                  Software Developer & AI Systems Engineer
                </h2>
                <span className={styles.bracketRight}>]</span>
              </div>

              <p className={styles.heroBio}>
                Specializing in robust backend microservices, production AI systems, C#/.NET
                enterprise architecture, and high-throughput data pipelines. Track record
                architecting zero-downtime IoT telemetry platforms, cross-ministry automation
                systems for the <strong>Office of the Prime Minister (Malta)</strong>, and 24/7
                algorithmic trading engines.
              </p>

              <div className={styles.heroCtas}>
                <TactileButton
                  variant="brass"
                  size="lg"
                  href="#projects"
                  icon={<Zap size={18} />}
                >
                  Inspect Systems
                </TactileButton>

                <TactileButton
                  variant="enamel"
                  size="lg"
                  href="/Saad_Lamkadam_Europass_CV.pdf"
                  download="Saad_Lamkadam_Europass_CV.pdf"
                  target="_blank"
                  icon={<FileText size={18} />}
                >
                  Download Europass CV
                </TactileButton>

                <TactileButton
                  variant="outline"
                  size="lg"
                  href="https://credly.com/users/saad-lamkadam"
                  target="_blank"
                  icon={<Award size={18} />}
                >
                  Credly Portfolio
                </TactileButton>
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics Ticker */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>7+</span>
              <span className={styles.metricLabel}>Years Software Engineering</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>75%</span>
              <span className={styles.metricLabel}>Reduction in IoT Alerting Ops</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>30%</span>
              <span className={styles.metricLabel}>Gov Workflow Acceleration</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>1,400+</span>
              <span className={styles.metricLabel}>Employees Automated via ERP</span>
            </div>
          </div>
        </section>

        <ArtDecoMotif type="divider" />

        {/* FLAGSHIP SYSTEMS & PROJECTS */}
        <section id="projects" className={styles.sectionArea}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionOverline}>EXHIBITION OF WORK</span>
            <h2 className={styles.sectionTitle}>Flagship Systems & Architecture</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.projectsGrid}>
            {/* ClawQuant */}
            <ArtDecoCard
              title="ClawQuant Engine"
              badge="Algorithmic Trading & Risk"
              icon={<Cpu size={20} />}
            >
              <div className={styles.projectContent}>
                <p>
                  Architected a 24/7 autonomous high-frequency trade execution engine featuring
                  deterministic circuit breakers, strict maximum drawdown stops, and sub-second
                  signal dispatch across perpetual crypto derivatives.
                </p>
                <div className={styles.techStackBadges}>
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>Bybit UTA</span>
                  <span>Docker</span>
                  <span>AsyncIO</span>
                </div>
                <div className={styles.projectFooter}>
                  <TactileButton
                    variant="enamel"
                    size="sm"
                    href="https://github.com/saad-lamkadam"
                    target="_blank"
                    icon={<ExternalLink size={14} />}
                  >
                    Engine Architecture
                  </TactileButton>
                </div>
              </div>
            </ArtDecoCard>

            {/* PrezzReali.mt */}
            <ArtDecoCard
              title="PrezzReali.mt"
              badge="Distributed Scraping"
              icon={<Globe size={20} />}
            >
              <div className={styles.projectContent}>
                <p>
                  Engineered an automated price intelligence platform across Maltese retail portals.
                  Built anti-blocking session pool rotators, multi-worker consensus verification, and
                  automated inflation tracking pipelines.
                </p>
                <div className={styles.techStackBadges}>
                  <span>Node.js</span>
                  <span>Puppeteer</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                </div>
                <div className={styles.projectFooter}>
                  <TactileButton
                    variant="enamel"
                    size="sm"
                    href="https://prezzreali.mt"
                    target="_blank"
                    icon={<ExternalLink size={14} />}
                  >
                    Live Platform
                  </TactileButton>
                </div>
              </div>
            </ArtDecoCard>

            {/* EU-Funded REACH IoT Telemetry */}
            <ArtDecoCard
              title="REACH IoT Telemetry Platform"
              badge="EU-Funded Hospitality IoT"
              icon={<Zap size={20} />}
            >
              <div className={styles.projectContent}>
                <p>
                  Engineered backend architecture, database schema, and live sensor stream processing
                  for European hospitality sites. Automated diagnostic alerting, slashing manual
                  interventions by 75% and increasing pipeline uptime by 28%.
                </p>
                <div className={styles.techStackBadges}>
                  <span>ASP.NET Core</span>
                  <span>SQL Server</span>
                  <span>REST APIs</span>
                  <span>GDPR Hardening</span>
                </div>
                <div className={styles.projectFooter}>
                  <span className={styles.deployedBadge}>Sens Innovation / Llobeno</span>
                </div>
              </div>
            </ArtDecoCard>

            {/* Autonomous Agent Harness */}
            <ArtDecoCard
              title="Autonomous Agent Swarms"
              badge="AI & Tool Orchestration"
              icon={<Terminal size={20} />}
            >
              <div className={styles.projectContent}>
                <p>
                  Designed modular multi-agent orchestration frameworks with persistent task memory,
                  dynamic tool discovery, and zero-loss context compaction for autonomous engineering
                  workflows.
                </p>
                <div className={styles.techStackBadges}>
                  <span>Python</span>
                  <span>LangChain</span>
                  <span>Claude Code</span>
                  <span>Vector Memory</span>
                </div>
                <div className={styles.projectFooter}>
                  <TactileButton
                    variant="enamel"
                    size="sm"
                    href="https://github.com/saad-lamkadam"
                    target="_blank"
                    icon={<ExternalLink size={14} />}
                  >
                    Open Source
                  </TactileButton>
                </div>
              </div>
            </ArtDecoCard>
          </div>
        </section>

        <ArtDecoMotif type="divider" />

        {/* CAREER & EXPERIENCE LEDGER */}
        <section id="experience" className={styles.sectionArea}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionOverline}>CHRONOLOGY OF SERVICE</span>
            <h2 className={styles.sectionTitle}>Engineering Career Ledger</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.timelineContainer}>
            {/* Job 1 */}
            <div className={styles.timelineRow}>
              <div className={styles.timelinePeriod}>
                <span className={styles.periodText}>2023 — 2025</span>
                <span className={styles.periodLoc}>Gzira, Malta</span>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeGem} />
              </div>
              <div className={styles.timelineCard}>
                <ArtDecoCard
                  title="Full-Stack Developer & IoT Engineer"
                  badge="Sens Innovation Ltd / Llobeno Ltd"
                  icon={<Briefcase size={18} />}
                >
                  <ul className={styles.bulletList}>
                    <li>
                      Architected IoT energy management pipelines operating 24/7 across hospitality
                      sites using ASP.NET, SQL Server, and REST APIs.
                    </li>
                    <li>
                      Led core engineering on the EU-funded REACH project: database schema design,
                      sensor ingest protocol, and low-latency metrics extraction.
                    </li>
                    <li>
                      Built automated incident alerting logic, slashing manual triage interventions
                      by 75% and lifting telemetry uptime by 28%.
                    </li>
                    <li>
                      Enforced strict GDPR compliance standards across all sensor and tenant data
                      storage boundaries.
                    </li>
                  </ul>
                </ArtDecoCard>
              </div>
            </div>

            {/* Job 2 */}
            <div className={styles.timelineRow}>
              <div className={styles.timelinePeriod}>
                <span className={styles.periodText}>2022 — 2023</span>
                <span className={styles.periodLoc}>Valletta, Malta</span>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeGem} />
              </div>
              <div className={styles.timelineCard}>
                <ArtDecoCard
                  title="Digital Developer & Automation Specialist"
                  badge="Office of the Prime Minister — Servizz.gov"
                  icon={<Briefcase size={18} />}
                >
                  <ul className={styles.bulletList}>
                    <li>
                      Delivered citizen-facing public services across Malta and Gozo deployed into
                      core government infrastructure.
                    </li>
                    <li>
                      Automated cross-ministry onboarding and approvals with Microsoft Power Platform,
                      cutting inter-departmental delays by 30%.
                    </li>
                    <li>
                      Collaborated directly with the Maltese Treasury (CFR) and MITA to resolve data
                      discrepancies and embed auditable rollback transaction safeguards.
                    </li>
                  </ul>
                </ArtDecoCard>
              </div>
            </div>

            {/* Job 3 */}
            <div className={styles.timelineRow}>
              <div className={styles.timelinePeriod}>
                <span className={styles.periodText}>2020 — 2021</span>
                <span className={styles.periodLoc}>San Gwann, Malta</span>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeGem} />
              </div>
              <div className={styles.timelineCard}>
                <ArtDecoCard
                  title="Junior Full-Stack Software Engineer"
                  badge="Avantech Software Ltd (Canon)"
                  icon={<Briefcase size={18} />}
                >
                  <ul className={styles.bulletList}>
                    <li>
                      Engineered enterprise software with C#, .NET Web API, and AngularJS for
                      financial services, banking, and wealth management clients.
                    </li>
                    <li>
                      Built secure workflow integrations for Identity Malta Public Registry
                      leveraging Therefore Document Management API.
                    </li>
                  </ul>
                </ArtDecoCard>
              </div>
            </div>

            {/* Job 4 */}
            <div className={styles.timelineRow}>
              <div className={styles.timelinePeriod}>
                <span className={styles.periodText}>2019 — 2020</span>
                <span className={styles.periodLoc}>Hal Far, Malta</span>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeGem} />
              </div>
              <div className={styles.timelineCard}>
                <ArtDecoCard
                  title="Junior Full-Stack Developer"
                  badge="Metallform Malta Ltd"
                  icon={<Briefcase size={18} />}
                >
                  <ul className={styles.bulletList}>
                    <li>
                      Constructed medical device QA monitoring software and internal enterprise
                      management applications using C#, ASP.NET, and WinForms.
                    </li>
                    <li>
                      Built an automated payroll check printing engine processing 1,400+ employees
                      across 3 factory warehouse facilities.
                    </li>
                  </ul>
                </ArtDecoCard>
              </div>
            </div>
          </div>
        </section>

        <ArtDecoMotif type="divider" />

        {/* CREDENTIALS, CERTIFICATIONS & SKILLS */}
        <section id="credentials" className={styles.sectionArea}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionOverline}>SOVEREIGN ACCREDITATIONS</span>
            <h2 className={styles.sectionTitle}>Certifications & Technical Mastery</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.credentialsGrid}>
            <div className={styles.certCol}>
              <h3 className={styles.colTitle}>
                <Award size={18} className={styles.titleIcon} /> Professional Certifications
              </h3>

              <div className={styles.certList}>
                <div className={styles.certItem}>
                  <div className={styles.certBadge}>Google / Coursera</div>
                  <div className={styles.certInfo}>
                    <strong>Google Project Management Professional</strong>
                    <span>6 ECTS Equivalent · Agile/Scrum, Sprint Governance & Risk Mitigation</span>
                  </div>
                </div>

                <div className={styles.certItem}>
                  <div className={styles.certBadge}>Google / Kiron</div>
                  <div className={styles.certInfo}>
                    <strong>Google IT Support Professional Certificate</strong>
                    <span>240 Hours · Linux administration, network architecture, CLI systems</span>
                  </div>
                </div>

                <div className={styles.certItem}>
                  <div className={styles.certBadge}>IBM / Coursera</div>
                  <div className={styles.certInfo}>
                    <strong>IBM AI Developer & Data Science Professional</strong>
                    <span>Machine Learning pipelines, Neural Networks & Generative AI</span>
                  </div>
                </div>

                <div className={styles.certItem}>
                  <div className={styles.certBadge}>KPMG Academy</div>
                  <div className={styles.certInfo}>
                    <strong>Microsoft Power Platform & RPA Automation</strong>
                    <span>Accredited CPE: Power Apps, Power Automate Cloud & Desktop RPA</span>
                  </div>
                </div>

                <div className={styles.certItem}>
                  <div className={styles.certBadge}>Jobsplus / MFHEA</div>
                  <div className={styles.certInfo}>
                    <strong>GDPR for Data Protection Officers (DPO)</strong>
                    <span>MQF Level 4 (1 ECTS) · European privacy, data transfer & consent law</span>
                  </div>
                </div>

                <div className={styles.certItem}>
                  <div className={styles.certBadge}>Univ. of Malta</div>
                  <div className={styles.certInfo}>
                    <strong>Maltese Language & Culture Integration</strong>
                    <span>Passed with Distinction (85%) · Official Ministry for Justice program</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills Enamel Plaque */}
            <div className={styles.skillsCol}>
              <h3 className={styles.colTitle}>
                <Layers size={18} className={styles.titleIcon} /> Technical Matrix
              </h3>

              <div className={styles.skillBox}>
                <span className={styles.skillCategory}>Languages & Runtimes</span>
                <div className={styles.tagWrap}>
                  <span className={styles.tag}>Python 3.12+</span>
                  <span className={styles.tag}>C# / .NET 8</span>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>JavaScript</span>
                  <span className={styles.tag}>SQL (T-SQL, PGSQL)</span>
                  <span className={styles.tag}>Bash / Shell</span>
                </div>
              </div>

              <div className={styles.skillBox}>
                <span className={styles.skillCategory}>Frameworks & Architectures</span>
                <div className={styles.tagWrap}>
                  <span className={styles.tag}>FastAPI</span>
                  <span className={styles.tag}>ASP.NET Core</span>
                  <span className={styles.tag}>Next.js 15</span>
                  <span className={styles.tag}>React 19</span>
                  <span className={styles.tag}>REST & GraphQL APIs</span>
                  <span className={styles.tag}>Microservices</span>
                </div>
              </div>

              <div className={styles.skillBox}>
                <span className={styles.skillCategory}>Data & Infrastructure</span>
                <div className={styles.tagWrap}>
                  <span className={styles.tag}>Docker</span>
                  <span className={styles.tag}>PostgreSQL</span>
                  <span className={styles.tag}>SQL Server</span>
                  <span className={styles.tag}>Redis</span>
                  <span className={styles.tag}>Linux Systems</span>
                  <span className={styles.tag}>Railway / Cloud</span>
                </div>
              </div>

              <div className={styles.skillBox}>
                <span className={styles.skillCategory}>Linguistic Competence (CEFR)</span>
                <div className={styles.languageGrid}>
                  <div className={styles.langPill}>
                    <span className={styles.langName}>English</span>
                    <span className={styles.langLevel}>Fluent / C2</span>
                  </div>
                  <div className={styles.langPill}>
                    <span className={styles.langName}>Italian</span>
                    <span className={styles.langLevel}>Independent / B2</span>
                  </div>
                  <div className={styles.langPill}>
                    <span className={styles.langName}>Maltese</span>
                    <span className={styles.langLevel}>Intermediate / B1</span>
                  </div>
                  <div className={styles.langPill}>
                    <span className={styles.langName}>French / Arabic</span>
                    <span className={styles.langLevel}>Native / Bilingual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ArtDecoMotif type="divider" />

        {/* CONTACT & CREDENTIALS VAULT */}
        <section id="contact" className={styles.sectionArea}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionOverline}>DIRECT INQUIRY</span>
            <h2 className={styles.sectionTitle}>Connect & Engage</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.contactConsole}>
            <div className={styles.consolePlate}>
              <h3 className={styles.consoleHeading}>Official Communication Channels</h3>
              <p className={styles.consoleSub}>
                Available for engineering roles, technical consulting, and architecture mandates.
              </p>

              <div className={styles.contactGrid}>
                {/* Email Item */}
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactTitle}>Direct Email</span>
                    <a href="mailto:saad.lamkadam@gmail.com" className={styles.contactValue}>
                      saad.lamkadam@gmail.com
                    </a>
                  </div>
                  <TactileButton
                    variant="enamel"
                    size="sm"
                    onClick={handleCopyEmail}
                  >
                    {copiedEmail ? "Copied!" : "Copy"}
                  </TactileButton>
                </div>

                {/* Telephone Item */}
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactTitle}>Telephone / WhatsApp</span>
                    <a href="tel:+35699971955" className={styles.contactValue}>
                      (+356) 99971955
                    </a>
                  </div>
                  <TactileButton
                    variant="enamel"
                    size="sm"
                    href="tel:+35699971955"
                  >
                    Call
                  </TactileButton>
                </div>

                {/* Location Item */}
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactTitle}>Current Residency</span>
                    <span className={styles.contactValue}>
                      Gzira, Malta (EU)
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.consoleDivider} />

              <div className={styles.consoleButtons}>
                <TactileButton
                  variant="brass"
                  size="md"
                  href="/Saad_Lamkadam_Europass_CV.pdf"
                  download="Saad_Lamkadam_Europass_CV.pdf"
                  target="_blank"
                  icon={<FileText size={16} />}
                >
                  Download Full Europass CV (PDF)
                </TactileButton>

                <TactileButton
                  variant="enamel"
                  size="md"
                  href="https://github.com/saad-lamkadam"
                  target="_blank"
                  icon={<GithubIcon size={16} />}
                >
                  GitHub Profile
                </TactileButton>

                <TactileButton
                  variant="enamel"
                  size="md"
                  href="https://credly.com/users/saad-lamkadam"
                  target="_blank"
                  icon={<Award size={16} />}
                >
                  Credly Accreditations
                </TactileButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SKEUOMORPHIC FOOTER */}
      <footer className={styles.footerSection}>
        <div className={styles.footerInner}>
          <ArtDecoMotif type="crest" className={styles.footerCrest} />
          <p className={styles.footerText}>
            © 2026 Saad (Jake) Lamkadam · Handcrafted in Art Deco &
            Skeuomorphic Obsidian Enamel
          </p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/saad-lamkadam" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span>•</span>
            <a href="https://credly.com/users/saad-lamkadam" target="_blank" rel="noopener noreferrer">
              Credly
            </a>
            <span>•</span>
            <a href="/Saad_Lamkadam_Europass_CV.pdf" target="_blank" rel="noopener noreferrer">
              Europass CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
