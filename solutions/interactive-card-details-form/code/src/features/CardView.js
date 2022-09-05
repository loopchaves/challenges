import styles from './styles/CardView.module.sass';

function formatCardNumber(val) {
  let pattern = ['0', '0', '0', '0', ' ', '0', '0', '0', '0', ' ', '0', '0', '0', '0', ' ', '0', '0', '0', '0'];

  if (val.length > 0) {
    for (let i = 0; i < pattern.length; i++) {
      if (i !== 4 && i !== 9 && i !== 14 && /\d/.test(val[i])) {
        pattern[i] = val[i];
      }
    }
  }

  return pattern.join('');
}

function formatName(val) {
  return val.length > 0 ? val : 'name';
}

function formatDate(month, year) {
  let pattern = ['0', '0', '/', '0', '0'];
  const date = month + '/' + year;

  if (date.length > 0) {
    for (let i = 0; i < pattern.length; i++) {
      if (i !== 2 && /\d/.test(date[i])) {
        pattern[i] = date[i];
      }
    }
  }

  return pattern.join('');
}

function formatCvc(val) {
  let pattern = ['0', '0', '0'];

  if (val.length > 0) {
    for (let i = 0; i < pattern.length; i++) {
      if (/\d/.test(val[i])) {
        pattern[i] = val[i];
      }
    }
  }

  return pattern.join('');
}

export default function Card({ state }) {
  return (
    <div className={styles.container}>
      <div className={styles.movel}>
        <div className={styles.card_front}>
          <p className={styles.cardNumber}>{formatCardNumber(state.cardNumber)}</p>
          <div className={styles.bottom}>
            <p className={styles.name}>{formatName(state.name)}</p>
            <p>{formatDate(state.month, state.year)}</p>
          </div>
        </div>
        <div className={styles.card_back}>
          <p className={styles.cvc}>{formatCvc(state.cvc)}</p>
        </div>
      </div>
    </div>
  );
}