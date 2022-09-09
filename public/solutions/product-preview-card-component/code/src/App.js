import { useMediaQuery } from 'react-responsive';

import mobile from './img/image-product-mobile.jpg';
import desktop from './img/image-product-desktop.jpg';

import styles from './styles/App.module.sass';

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });

  return (
    <main className={styles.container}>
      <img src={isMobile ? mobile : desktop} alt="Gabrielle Essence Eau De Parfum" />

      <section>
        <div className={styles.info}>
          <h2>Perfume</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p class={styles.description}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
            for the House of
            CHANEL.</p>
          <div class={styles.price}>
            <p class={styles.newPrice}>$149.99</p>
            <p class={styles.oldPrice}>$169.99</p>
          </div>
        </div>
        <button>Add to cart</button>
      </section>
    </main>
  );
}
