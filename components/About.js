import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <div className={styles.aboutImagePlaceholder}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--accent-color)" d="M40.5,-70.2C51.6,-63.1,59,-50.1,65.4,-36.6C71.8,-23.1,77.2,-9.1,77.3,5C77.4,19.1,72.2,33.3,63.8,44.8C55.4,56.3,43.8,65.1,30.7,71.1C17.6,77.1,3,80.3,-11.3,79.8C-25.6,79.3,-39.6,75.1,-52.3,68.1C-65,61.1,-76.4,51.3,-81.7,38.7C-87,26.1,-86.2,10.7,-83.5,-3.9C-80.8,-18.5,-76.2,-32.3,-67.8,-43.2C-59.4,-54.1,-47.2,-62.1,-34.3,-68.4C-21.4,-74.7,-7.8,-79.3,5.2,-77.8C18.2,-76.3,29.4,-77.3,40.5,-70.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          
          <div className={styles.aboutContent}>
            <h2>About Motta Financial</h2>
            <p>
              With years of experience in the financial services industry, Motta Financial has been helping individuals and businesses achieve their financial goals through expert guidance and personalized strategies.
            </p>
            <p>
              Our team of certified financial advisors is committed to understanding your unique situation and crafting solutions that align with your objectives, whether you&apos;re planning for retirement, growing your wealth, or securing your family&apos;s future.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>$100M+</div>
                <div className={styles.statLabel}>Assets Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

