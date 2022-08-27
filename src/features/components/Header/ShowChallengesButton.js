import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShow } from '../../../app/asideSlice';

import styles from './styles/ShowChallengesButton.module.sass';

export default function ShowChallengesButton() {
  const dispatch = useDispatch();
  const show = useSelector(state => state.aside.show);

  useEffect(() => {
    const button = document.getElementById('challengeButton');
    show
      ? button.style.setProperty('--rotation', '90deg')
      : button.style.setProperty('--rotation', '-90deg');
  }, [show]);

  return (
    <button
      id='challengeButton'
      className={styles.container}
      onClick={() => dispatch(toggleShow())}
    >
      Challenges
    </button>
  );
}