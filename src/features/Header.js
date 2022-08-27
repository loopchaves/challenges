import MediaQuery from 'react-responsive';

import ShowChallengesButton from './components/Header/ShowChallengesButton';
import ShowNavButton from './components/Header/ShowNavButton';
import NavBar from './components/Header/NavBar';

import logo from '../img/fem-logo.png';

export default function Header() {
  return (
    <header>
      <MediaQuery maxWidth={768}>
        <ShowChallengesButton />
      </MediaQuery>
      <a href='https://www.frontendmentor.io' target='_blanck'>
        <img src={logo} alt="Frontend mentor logo" />
      </a>
      <MediaQuery minWidth={769}>
        <NavBar />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <ShowNavButton />
      </MediaQuery>
    </header>
  );
}
