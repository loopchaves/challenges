import SpendDay from './components/SpendDay';
import data from './data.json';

import styles from './Spending.module.sass';

const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

export default function Spending() {
  const days = data.map(expense => {
    const day = week[new Date().getDay()];
    return (
      <SpendDay
        key={expense.day}
        amount={expense.amount}
        day={expense.day}
        now={expense.day === day}
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
