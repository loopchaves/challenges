import NewUserForm from './features/NewUserForm';
import styles from './styles/App.module.sass';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
      </header>
      <main className={styles.main}>
        <h2>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </h2>
        <NewUserForm />
      </main>
    </>
  );
}
