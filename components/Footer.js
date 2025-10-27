import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Motta Financial</h3>
            <p className={styles.footerText}>
              Professional financial services and advisory solutions tailored to your needs.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Services</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#services">Wealth Management</a></li>
              <li><a href="#services">Investment Planning</a></li>
              <li><a href="#services">Retirement Planning</a></li>
              <li><a href="#services">Financial Advisory</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact</h4>
            <ul className={styles.footerContact}>
              <li>Email: info@mottafinancial.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Motta Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

