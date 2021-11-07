import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);

  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
  };

  const clickGood = () => {
        setGood(good + 1);
        setTotal(total + 1);
        setScore(score + 1);
  };
  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setScore(score);
  };
  const clickBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setScore(score - 1);
  };

  return (
    <div>
      <h1>Please provide your feedback:</h1>
      <Button handleClick={clickGood} text='Good' />
      <Button handleClick={clickNeutral} text='Neutral' />
      <Button handleClick={clickBad} text='Bad' />

      <h1>Statistics:</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Average {score / total}</p>
      <p>Positive {(good/(total))*100} %</p>
    </div>
  )

}

export default App




