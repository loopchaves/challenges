import qrcode from './img/image-qr-code.png';
import styles from './styles/App.module.sass';

export default function App() {
  return (
    <main className={styles.container}>
      <picture>
        <img src={qrcode} alt="QR code" />
      </picture>
      <section>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </section>
    </main>
  );
}