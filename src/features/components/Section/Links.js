import { MdOpenInNew } from 'react-icons/md';
import { useSelector } from 'react-redux';

import styles from './styles/Links.module.sass';

export default function Links() {
  const name = useSelector(state => state.challenge.name);
  const site = process.env.PUBLIC_URL + '/solutions/' + name;
  const code = 'https://code/' + name;
  return (
    <div className={styles.container}>
      <a className={styles.site} href={site} target="_blank" rel="noreferrer">
        Preview site
        <MdOpenInNew />
      </a>
      <a className={styles.code} href={code} target="_blank" rel="noreferrer">
        View code
        <MdOpenInNew />
      </a>
    </div>
  );
}
