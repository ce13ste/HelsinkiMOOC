import React, { useState } from 'react';

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  );
};

const Statistics = (props) => {
  const values = props.values;
  if (values.total) {
    return (
      <table>
        <tbody>
        <StatisticsLine text={"Good"} value={values.good}/>
        <StatisticsLine text={"Neutral"} value={values.neutral}/>
        <StatisticsLine text={"Bad"} value={values.bad}/>
        <StatisticsLine text={"All"} value={values.total}/>
        <StatisticsLine text={"Average"} value={values.average}/>
        <StatisticsLine text={"Positive"} value={`${values.positive}%`}/>
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>
  }
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const Button = ({ text, handleClick }) => {
    return <button onClick={handleClick}>{text}</button>;
  };

  const clickGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setScore(score + 1);
    setAverage((score + 1) / (total + 1));
    setPositive(((good + 1)/ (total + 1)) * 100);
  };

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setScore(score);
    setAverage(score / (total + 1));
    setPositive((good / (total + 1)) * 100);
  };

  const clickBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setScore(score - 1);
    setAverage((score - 1) / (total + 1));
    setPositive(((good) / (total + 1)) * 100);
  };

  return (
    <main>
      <h1>Please provide your feedback:</h1>
      <Button handleClick={clickGood} text='Good' />
      <Button handleClick={clickNeutral} text='Neutral' />
      <Button handleClick={clickBad} text='Bad' />
      <h1>Statistics</h1>
      <Statistics values={{ good, neutral, bad, total, average, positive }} />
    </main>
  )

}

export default App




