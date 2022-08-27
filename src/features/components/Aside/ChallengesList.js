import styles from './styles/ChallengesList.module.sass';

export default function ChallengesList({ list, handleChangeChallenge }) {
  if (list.length > 0) {
    const challengeList = list.map(title => {
      return (
        <div key={title}>
          <li title={title} onClick={handleChangeChallenge}>
            {title}
          </li>
        </div>
      );
    });
    return <ul className={styles.container}>{challengeList}</ul>;
  }
  return <ul className={styles.container}><p>empty list</p></ul>;
}
