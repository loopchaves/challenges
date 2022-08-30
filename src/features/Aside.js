import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { change } from '../app/challengeSlice';
import { toggleShow } from '../app/asideSlice';
import { useLocation, useNavigate } from 'react-router-dom';

import ChallengesList from './components/Aside/ChallengesList';
import LevelTag from './components/Aside/LevelTag';
import challenges from './data/challenges.json';

export default function Aside() {
  const levels = ['newbie', 'junior', 'intermediate', 'advanced', 'guru'];
  const show = useSelector(state => state.aside.show);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const selectChallenge = useCallback((challenge) => {
    const links = document.querySelectorAll('li');
    links.forEach(link => {
      (challenge.title === link.getAttribute('title'))
        ? link.style.setProperty('--scale', 1)
        : link.style.setProperty('--scale', 0);
    });
    dispatch(change(challenge));
  }, [dispatch]);

  useEffect(() => {
    const param = new URLSearchParams(location.search);
    let challenge;
    if (param.has('challenge')) {
      const name = param.get('challenge');
      challenge = challenges.find(obj => obj.name === name);
    } else {
      challenge = challenges[0];
    }
    console.log(challenge);
    selectChallenge(challenge);
    return () => navigate('/challenges');
  }, [selectChallenge, location, navigate]);

  useEffect(() => {
    if (isMobile) {
      const aside = document.querySelector('aside');
      show
        ? aside.style.display = 'block'
        : aside.style.display = 'none';
    }
  }, [show, isMobile]);

  function handleOpenLevelList(e) {
    e.target.setAttribute('open', '');
    const lists = document.querySelectorAll('details');
    lists.forEach(list => e.target !== list && list.removeAttribute('open'));
  }

  function handleChangeChallenge(e) {
    const title = e.target.getAttribute('title');
    const challenge = challenges.find(obj => obj.title === title);
    selectChallenge(challenge);
    dispatch(toggleShow());
  }

  const lists = levels.map((level, index) => {
    const levelChallenges = challenges.filter(challenge => challenge.level === level);
    const list = levelChallenges.map(challenge => challenge.title)
    return (
      <details key={index} open={index === 0}>
        <summary onClick={(e) => handleOpenLevelList(e)}>
          <LevelTag level={level} index={index + 1} />
          <p>{list.length} challenges completed</p>
        </summary>
        <ChallengesList
          list={list}
          handleChangeChallenge={handleChangeChallenge}
        />
      </details>
    );
  });
  return <aside>{lists}</aside>;
}
