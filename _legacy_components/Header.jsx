import React from 'react';
import styles from './Header.module.css';
import logoUrl from '../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        
        <a href="/" className={styles.logoSection}>
          <img src={logoUrl} alt="Henotic Diagnostics Logo" className={styles.logoImage} />
          <h1 className={styles.brandName}>Henotic Diagnostics</h1>
        </a>

        <nav className={styles.navLinks}>
          <a href="#services" className={styles.navItem}>Services</a>
          <a href="#about" className={styles.navItem}>About Us</a>
          <a href="#contact" className={styles.navItem}>Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
