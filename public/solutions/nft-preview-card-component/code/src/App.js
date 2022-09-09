import equilibrium from './img/image-equilibrium.jpg';
import avatar from './img/image-avatar.png';

import styles from './styles/App.module.sass';

export default function App() {
  return (
    <main className={styles.container}>
      <div className={styles.equilibrium}>
        <img src={equilibrium} alt='NFT Equilibrium' />
        <div className={styles.overlay}></div>
      </div>
      <h1>Equilibrium #3429</h1>
      <p className={styles.description}>Our Equilibrium collection promotes balance and calm.</p>
      <div className={styles.info}>
        <p className={styles.price}>0.041 ETH</p>
        <p className={styles.date}>3 days left</p>
      </div>
      <div className={styles.creator}>
        <img src={avatar} alt='Equilibrium creator' />
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
    </main>
  );
}
