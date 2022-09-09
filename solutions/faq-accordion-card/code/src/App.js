import { useMediaQuery } from 'react-responsive';
import Faq from './features/Faq';

import box from './img/illustration-box-desktop.svg';
import mobile from './img/illustration-woman-online-mobile.svg';

import styles from './styles/App.module.sass';
import questions from './questions.json';

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' })

  return (
    <main className={styles.container}>
      {isMobile
        ? (
          <div className={styles.mobile}>
            <img src={mobile} alt='Woman online' />
          </div>)

        : (
          <div className={styles.desktop}>
            <img src={box} alt='Box' />
          </div>)}
      <section>
        <h1>FAQ</h1>
        <Faq questions={questions} />
      </section>
    </main>
  );
}
