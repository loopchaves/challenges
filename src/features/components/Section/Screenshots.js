import { useSelector } from 'react-redux';

import styles from './styles/Screenshots.module.sass';

export default function Screenshots() {
  const screenshots = useSelector(state => state.challenge.screenshots);
  const screenshotsList = screenshots.map((shot, index) => {
    return (
      <img
        key={index}
        src={require('../../../img/screenshots/' + shot)}
        alt={shot}
      />
    );
  });

  return (
    <div className={styles.container}>
      <h2>Screenshots</h2>
      <div className={styles.screenshots}>
        {screenshotsList}
      </div>
    </div>
  );
}
