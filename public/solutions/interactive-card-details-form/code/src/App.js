import { useState } from 'react';

import Card from './features/CardView';
import Form from './features/CardForm';
import ThankYou from './features/ThankYou';

import styles from './styles/App.module.sass';

export default function App() {
  const initialState = {
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  }

  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState(initialState);

  const handlerSetState = values => {
    setState({ ...state, ...values });
  }

  const handlerSubmit = () => {
    setSubmit(true);
  }

  const handlerContinue = () => {
    setState(initialState);
    setSubmit(false);
  }

  return (
    <main className={styles.container}>
      <Card
        state={state}
      />
      {
        submit
          ? <ThankYou
            handlerContinue={handlerContinue}
          />
          : <Form
            initialState={initialState}
            handlerSetState={handlerSetState}
            handlerSubmit={handlerSubmit}
          />
      }
    </main>
  );
}
