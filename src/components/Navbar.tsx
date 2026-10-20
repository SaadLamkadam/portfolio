"use client";

import React, { useState } from "react";
import { ArtDecoMotif } from "./ArtDecoMotif";
import { TactileButton } from "./TactileButton";
import { Menu, X, FileText, Award } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Systems", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.headerBar}>
      <div className={styles.innerContainer}>
        {/* Monogram Brand */}
        <a href="#overview" className={styles.brandGroup}>
          <ArtDecoMotif type="crest" className={styles.navCrest} />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>S. LAMKADAM</span>
            <span className={styles.brandSub}>AI & SYSTEMS ENGINEER</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navAnchor}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Fast Action Buttons */}
        <div className={styles.actionGroup}>
          <TactileButton
            variant="enamel"
            size="sm"
            href="https://github.com/saad-lamkadam"
            target="_blank"
            icon={<GithubIcon size={14} />}
          >
            GitHub
          </TactileButton>

          <TactileButton
            variant="brass"
            size="sm"
            href="/Saad_Lamkadam_Europass_CV.pdf"
            download="Saad_Lamkadam_Europass_CV.pdf"
            target="_blank"
            icon={<FileText size={14} />}
          >
            CV
          </TactileButton>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={styles.mobileDrawer}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileAnchor}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileDrawerActions}>
            <TactileButton
              variant="brass"
              size="md"
              href="/Saad_Lamkadam_Europass_CV.pdf"
              download="Saad_Lamkadam_Europass_CV.pdf"
              target="_blank"
              icon={<FileText size={16} />}
            >
              Download Europass CV
            </TactileButton>
          </div>
        </div>
      )}
    </header>
  );
};
