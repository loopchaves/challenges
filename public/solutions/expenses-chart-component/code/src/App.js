import Spending from './features/Spending';

import logo from './img/logo.svg';
import styles from './styles/App.module.sass';

export default function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>My balance</h1>
          <p>$921.48</p>
        </div>
        <img src={logo} alt='Logo' />
      </header>
      <main className={styles.main}>
        <Spending />
        <div className={styles.info}>
          <div>
            <p className={styles.desc}>Total this month</p>
            <p className={styles.total}>$478.33</p>
          </div>
          <div className={styles.percent_div}>
            <p className={styles.percent}>+2.4%</p>
            <p className={styles.desc}>from last month</p>
          </div>
        </div>
      </main>
    </div>
  );
}
