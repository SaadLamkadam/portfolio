import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ProjectInstrument } from "@/components/ProjectInstrument";
import { GreetingProvider, GreetingWord, LanguagePicker } from "@/components/Greeting";
import { Dossiers, type Dossier } from "@/components/Dossiers";
import { VfdReadout } from "@/components/VfdReadout";
import { Falcon } from "@/components/Falcon";
import { InteractionLayer } from "@/components/InteractionLayer";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";

const DOSSIERS: Dossier[] = [
  {
    id: "reach",
    title: "REACH IoT telemetry pipeline",
    when: "2023 – 2025 · EU-funded, Sens Innovation / Llobeno",
    text: "Backend architecture, database schema and live sensor-stream processing for hotel energy systems across Europe.",
    stack: "ASP.NET Core, SQL Server, REST APIs, GDPR hardening",
    schematic: { title: "REACH telemetry path", nodes: ["Hotel sensors", "Stream proc.", "ASP.NET API", "SQL Server", "Alerts"] },
    details: [
      "Designed the backend architecture and database schema for the EU-funded REACH project.",
      "Real-time processing of sensor streams from hospitality sites, running 24/7.",
      "Automated alerting cut manual intervention by 75% and lifted uptime by 28%.",
      "Strict GDPR compliance across stored telemetry.",
    ],
  },
  {
    id: "prezzreali",
    title: "PrezzReali.mt retail intelligence",
    when: "2024 · Distributed scraping",
    text: "Automated price monitoring across Maltese retail portals, so shoppers compare real shelf prices.",
    stack: "Node.js, Puppeteer, PostgreSQL, Redis",
    schematic: { title: "PrezzReali data path", nodes: ["Retail portals", "Session pool", "Workers", "Consensus", "PostgreSQL"], gate: 3 },
    details: [
      "Rotating session pools keep scraping reliable against anti-bot measures.",
      "Distributed workers collect prices in parallel across portals.",
      "Multi-worker consensus verifies a price before it is published, so one bad read never reaches a shopper.",
    ],
    link: { href: "https://prezzreali.mt", label: "Visit prezzreali.mt" },
  },
];

const EXPERIENCE = [
  {
    years: "2023–25",
    role: "Full-stack developer & IoT engineer",
    org: "Sens Innovation Ltd / Llobeno Ltd · Gżira",
    text: "IoT energy-management pipelines running 24/7 across hospitality sites on ASP.NET, SQL Server and REST APIs. Led development on the EU-funded REACH project: backend architecture, schema and real-time sensor processing, under strict GDPR compliance.",
  },
  {
    years: "2022–23",
    role: "Digital developer & automation specialist",
    org: "Office of the Prime Minister, Servizz.gov · Valletta",
    text: "Citizen-facing digital services across Malta and Gozo inside core government infrastructure. Automated cross-ministry onboarding and approvals with Power Automate and Power Apps, and worked with the Treasury (CFR) and MITA to resolve data inconsistencies with auditable rollback.",
  },
  {
    years: "2020–21",
    role: "Junior full-stack software engineer",
    org: "Avantech Software Ltd (Canon) · San Ġwann",
    text: "Enterprise applications in C#, .NET Web API and AngularJS for banking and wealth-management clients, and a secure workflow integration for the Identity Malta Public Registry using the Therefore API.",
  },
  {
    years: "2019–20",
    role: "Junior full-stack developer",
    org: "Metallform Malta Ltd · Ħal Far",
    text: "Medical-device QA monitoring software and internal portals in C#, ASP.NET and WinForms, plus an automated payroll cheque-printing system for 1,400+ employees across three warehouses.",
  },
];

const CERTIFICATIONS = [
  { name: "IBM AI Developer & Data Science Professional", detail: "Machine-learning pipelines, neural networks and generative AI, 2024" },
  { name: "Google Project Management Professional", detail: "6 ECTS equivalent, Agile/Scrum and governance, Coursera 2024" },
  { name: "Google IT Support Professional Certificate", detail: "240 hours, Linux administration and networking, 2024" },
  { name: "Microsoft Power Platform & RPA Automation", detail: "Accredited CPE: Power Apps, Power Automate cloud and desktop RPA, KPMG Academy" },
  { name: "GDPR for Data Protection Officers", detail: "MQF Level 4 (1 ECTS), Jobsplus / MFHEA, 2024" },
  { name: "Maltese Language & Culture Integration", detail: "Distinction (85%), University of Malta / Ministry for Justice" },
];

const FACTS = [
  { term: "Work rights", value: "EU family member, unrestricted EU/EEA work rights" },
  { term: "Languages", value: "English (C2), Italian (B2), Maltese (B1), French and Arabic (native)" },
  { term: "Primary stack", value: "Python, C# / .NET, TypeScript, FastAPI, PostgreSQL, Docker" },
  { term: "Disability registration", value: "Jobsplus Reg. No. 10363, permanent (Act 1995)" },
];

function SectionHead({ index, id, children }: { index: string; id: string; children: React.ReactNode }) {
  return (
    <div className={`${styles.head} reveal`}>
      <span className={styles.index} aria-hidden="true">
        <span className={styles.node} />
        <span className={styles.num}>{index}</span>
      </span>
      <h2 id={id} className={styles.h2}>
        {children}
      </h2>
    </div>
  );
}

function StepDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span />
      <svg viewBox="0 0 56 20" className={styles.chevron}>
        <path d="M0 10H14L20 4H36L42 10H56M20 16H36M24 10H32" />
        <path d="M28 2 34 10 28 18 22 10Z" className={styles.chevronFill} />
      </svg>
      <span />
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <InteractionLayer />
      <Header />

      <main className={styles.main}>
        <div className={styles.spine} aria-hidden="true" />

        <GreetingProvider>
          <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="hero-title">
            <h1 id="hero-title" className={styles.heroTitle}>
              <span className={styles.srOnly}>Hello, </span>
              <GreetingWord />
              <span className={styles.heroName}>I’m Saad Lamkadam.</span>
            </h1>

            <div className={styles.heroBody}>
              <div className={styles.heroText}>
                <p className={styles.statement}>
                  Software and AI systems engineer in Gżira, Malta. Seven years building backends that
                  cannot stop: hotel energy telemetry, government workflows and a 24/7 trading engine.
                </p>

                <div className={styles.actions}>
                  <a href="#work" className={styles.primary} data-sheen>
                    See the work
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="/Saad_Lamkadam_Europass_CV.pdf"
                    download="Saad_Lamkadam_Europass_CV.pdf"
                    className={styles.secondary}
                  >
                    Download CV (PDF)
                    <Download size={17} aria-hidden="true" />
                  </a>
                </div>

                <LanguagePicker />
              </div>

              <figure className={styles.portrait}>
                <div className={styles.frame}>
                  <span className={`${styles.step} ${styles.sTl}`} aria-hidden="true" />
                  <span className={`${styles.step} ${styles.sTr}`} aria-hidden="true" />
                  <span className={`${styles.step} ${styles.sBl}`} aria-hidden="true" />
                  <span className={`${styles.step} ${styles.sBr}`} aria-hidden="true" />
                  <div className={styles.mat}>
                    <Image
                      src="/saad_lamkadam_portrait.png"
                      alt="Portrait of Saad Lamkadam"
                      width={800}
                      height={800}
                      priority
                      sizes="(max-width: 760px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <figcaption>Gżira, Malta · unrestricted EU/EEA work rights</figcaption>
              </figure>
            </div>
          </section>
        </GreetingProvider>

        <section id="work" className={`${styles.work} shutter`} aria-labelledby="work-title">
          <div className={styles.wrap}>
            <SectionHead index="01" id="work-title">
              Systems in production
            </SectionHead>

            <article className={styles.feature}>
              <div className={`${styles.featureText} reveal`}>
                <h3 className={styles.featureTitle}>ClawQuant trade execution engine</h3>
                <p className={styles.when}>2024 – present · Algorithmic trading and risk</p>
                <p className={styles.workText}>
                  A 24/7 autonomous execution engine for crypto perpetuals: deterministic circuit breakers,
                  strict drawdown stops and sub-second signal dispatch, with every order passing a risk gate
                  before it reaches the exchange.
                </p>
                <p className={styles.stack}>Python 3.12, FastAPI, AsyncIO, Docker, Bybit UTA</p>
                <a
                  href="https://github.com/saad-lamkadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.darkLink}
                >
                  Code on GitHub
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className={styles.featureUi}>
                <ProjectInstrument />
              </div>
            </article>

            <div className={styles.dossiers}>
              <Dossiers items={DOSSIERS} />
            </div>
          </div>
        </section>

        <section className={styles.results} aria-labelledby="results-title">
          <div className={styles.wrap}>
            <SectionHead index="02" id="results-title">
              What changed once it shipped
            </SectionHead>
            <div className={`${styles.readouts} reveal`}>
              <VfdReadout value={75} suffix="%" label="less manual intervention on hotel energy sites, from automated alerting" />
              <VfdReadout value={28} suffix="%" label="more uptime on the same IoT sensor network" />
              <VfdReadout value={30} suffix="%" label="shorter processing delays across ministry approval workflows" />
              <VfdReadout value={1400} suffix="+" label="employees paid by the automated payroll printing system" />
            </div>
          </div>
        </section>

        <section id="experience" className={`${styles.wrap} ${styles.experience} shutter`} aria-labelledby="exp-title">
          <SectionHead index="03" id="exp-title">
            Seven years, four teams
          </SectionHead>
          <ol className={styles.ledger}>
            {EXPERIENCE.map((e) => (
              <li key={e.years} className={`${styles.ledgerRow} reveal`}>
                <span className={styles.years}>{e.years}</span>
                <div>
                  <h3 className={styles.role}>{e.role}</h3>
                  <p className={styles.plate}>{e.org}</p>
                </div>
                <p className={styles.ledgerText}>{e.text}</p>
              </li>
            ))}
          </ol>
          <StepDivider />
        </section>

        <section id="credentials" className={`${styles.credentials} shutter`} aria-labelledby="cred-title">
          <div className={styles.wrap}>
            <SectionHead index="04" id="cred-title">
              Credentials and work rights
            </SectionHead>
            <div className={styles.credGrid}>
              <ul className={`${styles.certs} reveal`}>
                {CERTIFICATIONS.map((c) => (
                  <li key={c.name}>
                    <h3 className={styles.certName}>{c.name}</h3>
                    <p className={styles.certDetail}>{c.detail}</p>
                  </li>
                ))}
              </ul>
              <dl className={`${styles.facts} reveal`}>
                {FACTS.map((f) => (
                  <div key={f.term}>
                    <dt>{f.term}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.contact} shutter`} aria-labelledby="contact-title">
          <div className={styles.wrap}>
            <div className={styles.contactGrid}>
              <div className="reveal">
                <SectionHead index="05" id="contact-title">
                  Write to me
                </SectionHead>
                <p className={styles.contactIntro}>
                  For engineering roles, architecture advice or consulting work.
                </p>
                <a href="mailto:saad.lamkadam@gmail.com" className={styles.email}>
                  saad.lamkadam@gmail.com
                </a>
                <ul className={styles.contactLinks}>
                  <li>
                    <a href="tel:+35699971955">+356 9997 1955</a>
                  </li>
                  <li>
                    <a href="https://github.com/saad-lamkadam" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://credly.com/users/saad-lamkadam" target="_blank" rel="noopener noreferrer">
                      Credly
                    </a>
                  </li>
                </ul>
              </div>
              <Falcon className={styles.contactFalcon} />
            </div>
          </div>
          <footer className={`${styles.wrap} ${styles.footer}`}>
            <span>© 2026 Saad (Jake) Lamkadam</span>
            <span>Gżira, Malta</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
