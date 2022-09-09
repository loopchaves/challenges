import sedans from './img/icon-sedans.svg';
import suvs from './img/icon-suvs.svg';
import luxury from './img/icon-luxury.svg';

import styles from './styles/App.module.sass';

export default function App() {
  return (
    <main className={styles.container}>
      <section className={styles.sedans}>
        <div>
          <img src={sedans} alt='Sedans icon' />

          <h1>Sedans</h1>

          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next
            road trip.</p>
        </div>

        <button>Learn More</button>
      </section>

      <section className={styles.suvs}>
        <div>
          <img src={suvs} alt='SUVs icon' />

          <h1>Suvs</h1>

          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and
            off-road adventures.</p>
        </div>

        <button>Learn More</button>
      </section>

      <section className={styles.luxury}>
        <div>
          <img src={luxury} alt='Luxury icon' />

          <h1>Luxury</h1>

          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and
            arrive in style.</p>
        </div>

        <button>Learn More</button>
      </section>
    </main>
  );
}
