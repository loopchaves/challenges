import { useState, useEffect, createRef } from 'react';
import { FiMenu } from 'react-icons/fi';

import NavBar from './NavBar';

import styles from './styles/ShowNavButton.module.sass';

export default function ShowNavButton() {
  const [showNav, setShowNav] = useState(false);
  const navButton = createRef();

  useEffect(() => {
    function closeNavBar(e) {
      if (showNav && !navButton.current.contains(e.target)) {
        setShowNav(false);
      }
    }
    window.addEventListener('click', (e) => closeNavBar(e));
    return () => {
      window.removeEventListener('click', (e) => closeNavBar(e));
    }
  }, [navButton, showNav]);

  function handleShowNavBar() {
    setShowNav(!showNav);
  }

  return (
    <div className={styles.container}>
      <button
        ref={navButton}
        onClick={() => handleShowNavBar()}
      >
        <FiMenu />
      </button>
      {showNav && <NavBar />}
    </div>
  );
}