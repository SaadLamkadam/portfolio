import React from "react";
import { Falcon } from "./Falcon";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.wordmark}>
          <Falcon className={styles.mark} speedlines={false} state="off" />
          Saad Lamkadam
        </a>

        <nav className={styles.nav} aria-label="Sections">
          <a href="#work" className={styles.navLink}>
            Work
          </a>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#credentials" className={styles.navLink}>
            Credentials
          </a>
          <a href="#contact" className={styles.action} data-sheen>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};
