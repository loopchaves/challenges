import { useEffect, useState, useCallback } from 'react';

import spin from './img/loading.svg';
import dice from './img/icon-dice.svg';
import styles from './styles/App.module.sass';

export default function App() {
  const [data, setData] = useState({ slip: {} });
  const [loading, setLoading] = useState(true);

  const newAdvice = useCallback(() => {
    setLoading(true);
    const api = {
      method: 'GET',
      cache: 'no-store'
    }
    fetch('https://api.adviceslip.com/advice', api)
      .then(resp => resp.json())
      .then(slip => {
        setData(slip)
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [setData]);

  useEffect(() => {
    newAdvice();
  }, [newAdvice]);

  return (
    <main className={styles.container}>
      <h1>Advice #{data.slip.id}</h1>
      <p>{
        loading
          ? <div><img src={spin} alt="loading" /></div>
          : <q>{data.slip.advice}</q>
      }</p>
      <button onClick={newAdvice}><img src={dice} alt="dice" /></button>
    </main>
  );
}
