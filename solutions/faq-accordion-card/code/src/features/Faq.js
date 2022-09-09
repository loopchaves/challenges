import { useState } from 'react';
import Accordion from './Accordion';

export default function Faq({ questions }) {
  const allClose = Array(questions.length).fill(false)
  const [open, setOpen] = useState([...allClose]);

  function handlerOpen(id) {
    let arrOpen = [...allClose];
    arrOpen[id] = !open[id];
    setOpen(arrOpen);
  }

  function renderQuestions(arr) {
    let render = [];
    for (let i = 0; i < arr.length; i++) {
      const [question, answer] = arr[i];
      render.push(<Accordion
        key={i}
        id={i}
        question={question}
        answer={answer}
        open={open[i]}
        handlerOpen={handlerOpen}
      />);
    }
    return render;
  }

  return (
    <>
      {renderQuestions(questions)}
    </>
  );
}
