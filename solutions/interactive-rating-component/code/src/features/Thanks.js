import thanks from '../img/illustration-thank-you.svg';
import styles from './styles/Thanks.module.sass';

export default function Thanks({ selected }) {
  return (
    <div className={styles.container}>
      <img src={thanks} alt='Illustration thank you' />
      <div>
        <h2>You selected {selected} out of 5</h2>
      </div>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  );
}
