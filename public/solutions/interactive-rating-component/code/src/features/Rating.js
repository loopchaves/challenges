import { useState } from 'react';

import styles from './styles/Rating.module.sass';

export default function Rating({ handlerSubmit }) {
  const [selected, setSelected] = useState(null);

  function handlerSelected(e) {
    const allCircles = document.querySelectorAll('.' + styles.circle);
    allCircles.forEach(circle => circle.classList.remove(styles.rate));
    e.target.classList.add(styles.rate);
    setSelected(e.target.innerHTML);
  }

  const circles = () => {
    let arr = [];
    for (let i = 1; i < 6; i++) {
      arr.push(<div
        onClick={e => handlerSelected(e)}
        key={i}
        className={styles.circle}
      >
        {i}
      </div>);
    }
    return arr;
  }

  return (
    <div className={styles.container}>
      <div className={styles.star}></div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!</p>
      <div className={styles.rating}>
        {circles()}
      </div>
      <button onClick={() => selected && handlerSubmit(selected)}>Submit</button>
    </div>
  );
}
