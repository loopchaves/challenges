import styles from './styles/ThankYou.module.sass';

export default function ThankYou({ handlerContinue }) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.thank}>Thank you!</p>
        <p className={styles.msg}>We've added your card details</p>
        <button onClick={handlerContinue}>Confirm</button>
      </div>
    </div>
  );
}
