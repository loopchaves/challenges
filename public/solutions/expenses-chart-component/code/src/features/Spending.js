import SpendDay from './components/SpendDay';
import data from './data.json';

import styles from './Spending.module.sass';

const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

export default function Spending() {
  const days = data.map(info => {
    const day = week[new Date().getDay()];
    return (
      <SpendDay
        key={info.day}
        amount={info.amount}
        day={info.day}
        now={info.day === day}
      />
    );
  });

  return (
    <div className={styles.container}>
      <h2>Spending - Last 7 days</h2>
      <div className={styles.data}>
        {days}
      </div>
    </div>
  );
}
