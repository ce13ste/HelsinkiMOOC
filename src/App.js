import React from 'react'

const Hello = (props) => {
  return (
    <div><p>Hello {props.name}, I love my fish and cats for {props.year} year</p>
    </div>
  )
}

const App = () => {
  const name = "Sophie"
  const year = 2
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Chris" year="forever" />
      <Hello name="Pocky" year={year}/>
      <Hello name="Bru" year={year +1000} />
    </div>
  )
}

export default App;

