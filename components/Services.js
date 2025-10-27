import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth management solutions tailored to grow and preserve your assets for the long term.',
      icon: '💰'
    },
    {
      title: 'Investment Planning',
      description: 'Strategic investment planning designed to maximize returns while managing risk according to your goals.',
      icon: '📈'
    },
    {
      title: 'Retirement Planning',
      description: 'Expert guidance to ensure a comfortable retirement through careful planning and smart investment strategies.',
      icon: '🏖️'
    },
    {
      title: 'Financial Advisory',
      description: 'Personalized financial advice to help you make informed decisions about your money and future.',
      icon: '💼'
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax burden and maximize your financial efficiency.',
      icon: '📊'
    },
    {
      title: 'Estate Planning',
      description: 'Comprehensive estate planning services to protect your legacy and provide for your loved ones.',
      icon: '🏛️'
    }
  ]

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.servicesHeader}>
          <h2>Our Services</h2>
          <p className={styles.servicesSubtitle}>
            Comprehensive financial solutions to help you achieve your goals
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

