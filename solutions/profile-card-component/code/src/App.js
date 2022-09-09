import photo from './img/image-victor.jpg';
import styles from './styles/App.module.sass';

export default function App() {
  return (
    <main className={styles.container}>
      <div className={styles.photoWrapper}>
        <img src={photo} alt='Victor Crest' className={styles.photo} />
      </div>
      <div className={styles.profile}>
        <h1>Victor Crest</h1>
        <h2>26</h2>
        <h3>London</h3>
        <div className={styles.statusInfo}>
          <div className={styles.status}>
            <h4>80K</h4>
            <p>Followers</p>
          </div>
          <div className={styles.status}>
            <h4>803K</h4>
            <p>Likes</p>
          </div>
          <div className={styles.status}>
            <h4>1.4K</h4>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}
