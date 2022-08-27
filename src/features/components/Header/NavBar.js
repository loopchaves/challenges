import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/NavBar.module.sass';

export default function NavBar() {
  const [showSolutions, setShowSolutions] = useState(true);
  const local = window.location.pathname;

  useEffect(() => {
    if (local === '/author/' || local === '/author') {
      setShowSolutions(false);
    }
  }, [local])

  function handleTogglePage() {
    setShowSolutions(!showSolutions);
  }

  return (
    <nav className={styles.container}>
      <Link
        to='/challenges'
        onClick={() => handleTogglePage()}
        style={showSolutions ? { '--scale': 1 } : { '--scale': 0 }}
      >
        Solutions
      </Link>
      <Link
        to='/author'
        onClick={() => handleTogglePage()}
        style={showSolutions ? { '--scale': 0 } : { '--scale': 1 }}
      >
        Author
      </Link>
    </nav>
  );
}