import { useState } from 'react';

import Rating from './features/Rating';
import Thanks from './features/Thanks';

import styles from './styles/App.module.sass';

export default function App() {
  const [submit, setSubmit] = useState(null);

  function handlerSubmit(value) {
    setSubmit(value);
  }

  return (
    <main className={styles.container}>
      {submit
        ? <Thanks selected={submit} />
        : <Rating handlerSubmit={handlerSubmit} />}
    </main>
  );
}
