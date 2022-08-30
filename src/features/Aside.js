import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { change } from '../app/challengeSlice';
import { toggleShow } from '../app/asideSlice';
import { useSearchParams } from 'react-router-dom';

import ChallengesList from './components/Aside/ChallengesList';
import LevelTag from './components/Aside/LevelTag';
import challenges from './data/challenges.json';

export default function Aside() {
  const levels = ['newbie', 'junior', 'intermediate', 'advanced', 'guru'];
  const show = useSelector(state => state.aside.show);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('challenge');

  function selectChallenge(challenge) {
    const links = document.querySelectorAll('li');
    links.forEach(link => {
      (challenge.title === link.getAttribute('title'))
        ? link.style.setProperty('--scale', 1)
        : link.style.setProperty('--scale', 0);
    });
    dispatch(change(challenge));
  }

  useEffect(() => {
    if (param) {
      const challenge = challenges.find(obj => obj.name === param);
      selectChallenge(challenge);
      searchParams.delete('challenge');
      setSearchParams(searchParams);
    } else {
      selectChallenge(challenges[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
