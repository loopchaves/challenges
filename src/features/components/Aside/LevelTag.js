import styles from './styles/LevelTag.module.sass';

export default function LevelTag({ level, index }) {
  return (
    <div className={`${styles[level + '_div']} ${styles.container}`}>
      <span className={`${styles[level + '_number']} ${styles.number}`}>
        {index}
      </span>
      <span className={`${styles[level + '_tag']} ${styles.tag}`}>
        {level}
      </span>
    </div>
  );
}
