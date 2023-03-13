import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
  {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const addGood = () => {
    const updatedGood = good +1 
    const total = updatedGood + neutral + bad
    setGood(updatedGood)
    setAll(total)
    setAverage((updatedGood - bad)/total)
    setPositive((updatedGood)/total*100)
  }
  const addNeutral = () => {
    const updatedNeutral = neutral +1 
    const total = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setAll(total)
    setAverage((good - bad)/total)
    setPositive((good)/total*100)
  }
  const addBad = () => {
    const updatedBad = bad +1 
    const total = good + neutral + updatedBad
    setBad(updatedBad)
    setAll(total)
    setAverage((good - updatedBad)/total)
    setPositive((good)/total*100)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>

    </>
  )
}

export default App