import { useSelector } from 'react-redux';

import FemLink from './FemLink';
import Links from './Links';

import styles from './styles/SectionHeader.module.sass';

export default function SectionHeader() {
  const title = useSelector(state => state.challenge.title);
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Links />
      <p>This is a solution to the <FemLink /> challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding
        skills by building realistic projects.</p>
    </div>
  );
}
