import { useSelector } from 'react-redux';

import styles from './styles/BuildWith.module.sass';

export default function BuildWith() {
  const build = useSelector(state => state.challenge.build);
  return (
    <div className={styles.container}>
      <h2>Build with</h2>
      {build.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
}
