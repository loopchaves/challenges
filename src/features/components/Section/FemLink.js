import { useSelector } from 'react-redux';

export default function FemLink() {
  const fem = useSelector(state => state.challenge.fem);
  const title = useSelector(state => state.challenge.title);
  const femLink = 'https://www.frontendmentor.io/solutions/' + fem;
  return <a href={femLink} target='_blank' rel='noreferrer'>{title}</a>;
}
