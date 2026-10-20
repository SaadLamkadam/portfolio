import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ProjectInstrument } from "@/components/ProjectInstrument";
import { ArtDecoFrame } from "@/components/ArtDecoFrame";
import { ArtDecoGraphic } from "@/components/ArtDecoGraphic";
import { ArrowRight, Download, ExternalLink, MapPin } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.canvas}>
      <Header />

      <main className={styles.mainContainer}>
        {/* EDITORIAL HERO SECTION: ASYMMETRIC GRID */}
        <section className={styles.heroSection}>
          {/* Left Column: Clear Identity, Portrait & Positioning */}
          <div className={styles.heroIntro}>
            <div className={styles.profileHeader}>
              <ArtDecoFrame className={styles.portraitFrame} label="ENGINEERING PROFILE">
                <div className={styles.imageWrapper}>
                  <Image
                    src="/saad_lamkadam_portrait.png"
                    alt="Saad (Jake) Lamkadam"
                    width={110}
                    height={110}
                    priority
                    className={styles.portraitImg}
                  />
                </div>
              </ArtDecoFrame>

              <div className={styles.profileBioBlock}>
                <div className={styles.locationTag}>
                  <MapPin size={12} className={styles.pinIcon} />
                  <span>Gzira, Malta · Senior Engineer</span>
                </div>
                <div className={styles.provenanceNote}>
                  <span className={styles.provDot} />
                  <span>EU Family Member · Unrestricted EU/EEA Work Rights</span>
                </div>
              </div>
            </div>

            <h1 className={styles.heroHeadline}>
              Engineering resilient backend architectures, production AI systems, and real-time data pipelines.
            </h1>

            <p className={styles.heroStatement}>
              Over 7 years architecting high-availability IoT telemetry pipelines running 24/7 across hospitality sites, 
              automating cross-ministry workflows for the Office of the Prime Minister, and building autonomous algorithmic trading engines.
            </p>

            <div className={styles.actionsCluster}>
              <a href="#work" className={styles.primaryAction}>
                <span>View selected work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="/Saad_Lamkadam_Europass_CV.pdf"
                download="Saad_Lamkadam_Europass_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                <span>Download CV (PDF)</span>
                <Download size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Physical Tactile Instrument Panel (Proof of Work) */}
          <div className={styles.heroConsoleWrapper}>
            <div className={styles.consoleHeaderRule}>
              <span className={styles.consoleLabel}>FEATURED SYSTEM SPECIFICATION</span>
              <span className={styles.artDecoHairline} />
            </div>
            <ProjectInstrument />
          </div>
        </section>

        {/* RESTRAINED ART DECO SECTION DIVIDER */}
        <ArtDecoGraphic type="chevron" />

        {/* SELECTED WORK SECTION */}
        <section id="work" className={styles.sectionBlock}>
          <div className={styles.sectionHeadingRow}>
            <div className={styles.sectionIndex}>01 / SYSTEMS</div>
            <h2 className={styles.sectionHeading}>Selected Engineering Work</h2>
          </div>

          <div className={styles.workList}>
            {/* Project Item 1 */}
            <article className={styles.workRow}>
              <div className={styles.workMeta}>
                <span className={styles.workYear}>2024 — PRESENT</span>
                <span className={styles.workCategory}>Algorithmic Trading & Risk</span>
              </div>
              <div className={styles.workDetails}>
                <h3 className={styles.workTitle}>ClawQuant Trade Execution Engine</h3>
                <p className={styles.workExcerpt}>
                  Architected a 24/7 autonomous trade execution engine featuring deterministic circuit breakers,
                  strict drawdown stops, and sub-second signal dispatch across crypto perpetuals (Python, FastAPI, Bybit UTA).
                </p>
                <div className={styles.workTechStack}>
                  <span>Python 3.12</span>
                  <span>FastAPI</span>
                  <span>AsyncIO</span>
                  <span>Docker</span>
                  <span>Bybit UTA</span>
                </div>
              </div>
              <div className={styles.workLink}>
                <a
                  href="https://github.com/saad-lamkadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rowLink}
                >
                  <span>Repository</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </article>

            {/* Project Item 2 */}
            <article className={styles.workRow}>
              <div className={styles.workMeta}>
                <span className={styles.workYear}>2023 — 2025</span>
                <span className={styles.workCategory}>IoT Telemetry & Energy</span>
              </div>
              <div className={styles.workDetails}>
                <h3 className={styles.workTitle}>EU-Funded REACH IoT Telemetry Pipeline</h3>
                <p className={styles.workExcerpt}>
                  Engineered backend architecture, database schema, and live sensor stream processing for European hospitality sites.
                  Built automated alerting slashing manual intervention by 75% and increasing uptime by 28% (Sens Innovation / Llobeno).
                </p>
                <div className={styles.workTechStack}>
                  <span>ASP.NET Core</span>
                  <span>SQL Server</span>
                  <span>REST APIs</span>
                  <span>GDPR Hardening</span>
                </div>
              </div>
              <div className={styles.workLink}>
                <span className={styles.deployedClient}>Sens Innovation Ltd</span>
              </div>
            </article>

            {/* Project Item 3 */}
            <article className={styles.workRow}>
              <div className={styles.workMeta}>
                <span className={styles.workYear}>2024</span>
                <span className={styles.workCategory}>Distributed Scraping</span>
              </div>
              <div className={styles.workDetails}>
                <h3 className={styles.workTitle}>PrezzReali.mt Retail Intelligence</h3>
                <p className={styles.workExcerpt}>
                  Engineered automated price monitoring across Maltese retail portals with anti-blocking session pool rotation,
                  distributed data scraping, and multi-worker consensus verification.
                </p>
                <div className={styles.workTechStack}>
                  <span>Node.js</span>
                  <span>Puppeteer</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                </div>
              </div>
              <div className={styles.workLink}>
                <a
                  href="https://prezzreali.mt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rowLink}
                >
                  <span>Platform</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* RESTRAINED ART DECO SECTION DIVIDER */}
        <ArtDecoGraphic type="chevron" />

        {/* CAREER HISTORY SECTION */}
        <section id="experience" className={styles.sectionBlock}>
          <div className={styles.sectionHeadingRow}>
            <div className={styles.sectionIndex}>02 / EXPERIENCE</div>
            <h2 className={styles.sectionHeading}>Engineering Career</h2>
          </div>

          <div className={styles.experienceList}>
            <div className={styles.expItem}>
              <div className={styles.expDate}>2023 — 2025</div>
              <div className={styles.expContent}>
                <h3 className={styles.expRole}>Full-Stack Developer & IoT Engineer</h3>
                <span className={styles.expOrg}>Sens Innovation Ltd / Llobeno Ltd · Gzira, Malta</span>
                <p className={styles.expText}>
                  Architected IoT energy management pipelines operating 24/7 across hospitality sites using ASP.NET, SQL Server, and REST APIs.
                  Led development on the EU-funded REACH Project, designing backend architecture, DB schema, and real-time sensor processing.
                  Built automated alerting systems reducing manual intervention by 75% and improving uptime by 28%. Enforced strict GDPR compliance.
                </p>
              </div>
            </div>

            <div className={styles.expItem}>
              <div className={styles.expDate}>2022 — 2023</div>
              <div className={styles.expContent}>
                <h3 className={styles.expRole}>Digital Developer & Automation Specialist</h3>
                <span className={styles.expOrg}>Office of the Prime Minister — Servizz.gov · Valletta, Malta</span>
                <p className={styles.expText}>
                  Developed and deployed citizen-facing digital services across Malta and Gozo inside core government infrastructure.
                  Automated cross-ministry onboarding and approval workflows using Power Automate and Power Apps, slashing processing delays by 30%.
                  Partnered directly with the Maltese Treasury (CFR) and MITA to resolve inter-ministerial data inconsistencies with auditable rollback logic.
                </p>
              </div>
            </div>

            <div className={styles.expItem}>
              <div className={styles.expDate}>2020 — 2021</div>
              <div className={styles.expContent}>
                <h3 className={styles.expRole}>Junior Full-Stack Software Engineer</h3>
                <span className={styles.expOrg}>Avantech Software Ltd (Canon) · San Gwann, Malta</span>
                <p className={styles.expText}>
                  Engineered and maintained full-stack enterprise applications using C#, .NET Web API, and AngularJS for financial services, banking, and wealth management clients.
                  Developed secure internal workflow integration for the Identity Malta Public Registry utilizing Therefore API.
                </p>
              </div>
            </div>

            <div className={styles.expItem}>
              <div className={styles.expDate}>2019 — 2020</div>
              <div className={styles.expContent}>
                <h3 className={styles.expRole}>Junior Full-Stack Developer</h3>
                <span className={styles.expOrg}>Metallform Malta Ltd · Hal Far, Malta</span>
                <p className={styles.expText}>
                  Constructed medical device QA monitoring software and internal enterprise portals using C#, ASP.NET, and WinForms.
                  Built an automated payroll check printing system serving 1,400+ employees across 3 facility warehouses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESTRAINED ART DECO SECTION DIVIDER */}
        <ArtDecoGraphic type="chevron" />

        {/* CREDENTIALS SECTION */}
        <section id="credentials" className={styles.sectionBlock}>
          <div className={styles.sectionHeadingRow}>
            <div className={styles.sectionIndex}>03 / CREDENTIALS</div>
            <h2 className={styles.sectionHeading}>Certifications & Legal Status</h2>
          </div>

          <div className={styles.credentialsGrid}>
            <div className={styles.credentialsCol}>
              <h3 className={styles.subColHeading}>Professional Certifications</h3>
              <ul className={styles.cleanList}>
                <li>
                  <strong>Google Project Management Professional</strong>
                  <span>6 ECTS Equivalent · Agile/Scrum & Governance (Coursera, 2024)</span>
                </li>
                <li>
                  <strong>Google IT Support Professional Certificate</strong>
                  <span>240 Hours · Linux administration, network architecture (2024)</span>
                </li>
                <li>
                  <strong>IBM AI Developer & Data Science Professional</strong>
                  <span>Machine Learning pipelines, Neural Networks & Generative AI (2024)</span>
                </li>
                <li>
                  <strong>Microsoft Power Platform & RPA Automation</strong>
                  <span>Accredited CPE: Power Apps, Power Automate Cloud/Desktop RPA (KPMG Academy)</span>
                </li>
                <li>
                  <strong>GDPR for Data Protection Officers (DPO)</strong>
                  <span>MQF Level 4 (1 ECTS) · Jobsplus / MFHEA (2024)</span>
                </li>
                <li>
                  <strong>Maltese Language & Culture Integration</strong>
                  <span>Distinction (85%) · University of Malta / Ministry for Justice</span>
                </li>
              </ul>
            </div>

            <div className={styles.credentialsCol}>
              <h3 className={styles.subColHeading}>Legal Status & Competencies</h3>
              <div className={styles.legalBox}>
                <div className={styles.legalRow}>
                  <span className={styles.legalLabel}>Work Authorization</span>
                  <span className={styles.legalVal}>EU Family Member · Unrestricted EU/EEA work rights</span>
                </div>
                <div className={styles.legalRow}>
                  <span className={styles.legalLabel}>Disability Registration</span>
                  <span className={styles.legalVal}>Jobsplus Reg. No. 10363, Permanent (Act 1995)</span>
                </div>
                <div className={styles.legalRow}>
                  <span className={styles.legalLabel}>Primary Stack</span>
                  <span className={styles.legalVal}>Python, C# / .NET, TypeScript, FastAPI, PostgreSQL, Docker</span>
                </div>
                <div className={styles.legalRow}>
                  <span className={styles.legalLabel}>Languages</span>
                  <span className={styles.legalVal}>English (C2 Fluent), Italian (B2), Maltese (B1), French & Arabic (Native)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESTRAINED ART DECO SECTION DIVIDER */}
        <ArtDecoGraphic type="chevron" />

        {/* CONTACT SECTION */}
        <section id="contact" className={styles.sectionBlock}>
          <div className={styles.sectionHeadingRow}>
            <div className={styles.sectionIndex}>04 / CONTACT</div>
            <h2 className={styles.sectionHeading}>Direct Communication</h2>
          </div>

          <div className={styles.contactPanel}>
            <div className={styles.contactDetails}>
              <p className={styles.contactIntro}>
                For software engineering roles, system architecture advisory, or enterprise consultations:
              </p>
              <div className={styles.contactLinks}>
                <a href="mailto:saad.lamkadam@gmail.com" className={styles.contactActionLink}>
                  saad.lamkadam@gmail.com
                </a>
                <span className={styles.contactSep}>/</span>
                <a href="tel:+35699971955" className={styles.contactActionLink}>
                  (+356) 99971955
                </a>
                <span className={styles.contactSep}>/</span>
                <a
                  href="https://github.com/saad-lamkadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactActionLink}
                >
                  GitHub
                </a>
                <span className={styles.contactSep}>/</span>
                <a
                  href="https://credly.com/users/saad-lamkadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactActionLink}
                >
                  Credly
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>Saad (Jake) Lamkadam · Software & AI Systems Engineer</span>
          <span>Malta · 2026</span>
        </div>
      </footer>
    </div>
  );
}
