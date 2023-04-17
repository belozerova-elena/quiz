import React from 'react';
import './index.css';
import './style.scss'

const questions = [
  {
    title: 'React - это ...',
    variants: ['фреймворк', 'библиотека', 'приложение'],
    correct: 1,
  },
  {
    title: 'В React все является ... ',
    variants: ['компонентом', 'модулем', 'классом'],
    correct: 0,
  },
  {
    title: 'Что такое виртуальная DOM?',
    variants: ['встроенный компонент браузера', 'точная HTML-копия реальной DOM', 'объект JavaScript, содержащий элементы и данные'],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <h2 className="result__title">Вы отгадали <span>{correct}</span> ответа из <span>{questions.length}</span></h2>
      <a href='/' className="result__link"> 
        <button className="result__link-btn">Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className="game">
      <div className="game__progress">
        <div style={{ width: `${percentage}%`}} className="game__progress-inner"></div>
      </div>
      <h1 className="game__title">{question.title}</h1>
      <ul className="game__list">
        {question.variants.map((text, index) => (
          <li className="game__list-item" onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="app">
      {
        step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
        ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;