import React from "react";
import { GithubIcon } from "./GithubIcon";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <span className={styles.name}>Saad Lamkadam</span>
          <span className={styles.divider}>/</span>
          <span className={styles.role}>Software & AI Systems Engineer</span>
        </div>

        <nav className={styles.nav}>
          <a href="#work" className={styles.navLink}>
            Work
          </a>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#credentials" className={styles.navLink}>
            Credentials
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
          <a
            href="https://github.com/saad-lamkadam"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub profile"
          >
            <GithubIcon size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
};
