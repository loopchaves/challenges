import { useEffect } from 'react';
import styles from './styles/Accordion.module.sass';

export default function Accordion({ id, question, answer, open, handlerOpen }) {
  const toOpen = () => handlerOpen(id);

  useEffect(() => {
    const arrow = document.getElementById(id);
    arrow.style.setProperty('--rotation', open ? '180deg' : '0');
    arrow.style.setProperty('--fontWeight', open ? '700' : '400');
  }, [open, id])

  return (
    <div className={styles.container}>
      <p id={id} onClick={(e) => toOpen(e)}>{question}</p>
      {open && <span>{answer}</span>}
    </div>
  );
}
