import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Your Financial Success <br />
            <span className={styles.heroHighlight}>Starts Here</span>
          </h1>
          <p className={styles.heroDescription}>
            Expert financial guidance and personalized strategies to help you achieve your financial goals and secure your future.
          </p>
          <div className={styles.heroButtons}>
            <a href="#contact" className="btn btn-primary">
              Schedule Consultation
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImagePlaceholder}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--secondary-color)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.1C-23,86.6,-37.8,82.6,-51.4,75.1C-65,67.6,-77.4,56.6,-84.2,42.8C-91,29,-92.2,12.4,-89.7,-3.2C-87.2,-18.8,-81,-33.4,-71.8,-45.6C-62.6,-57.8,-50.4,-67.6,-36.8,-75.2C-23.2,-82.8,-8.2,-88.2,5.2,-87.4C18.6,-86.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

