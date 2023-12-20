import { useState } from 'react'

const Button = ({handleGood, handleNeutral, handleBad}) => {
  return(
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good-bad)/ all
  const positive = good / all * 100
  if(good !== 0 || neutral !== 0 || bad !== 0){
    return (
      <table>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad'value={bad}/>
        <StatisticsLine text='all'value={all}/>
        <StatisticsLine text='average'value={average}/>
        <StatisticsLine text='positive'value={positive} text2={'%'}/>
      </table>
    )
  }
  else{
    return <p>No feddback given</p>
  }
}

const StatisticsLine = ({text, value, text2}) => {
  return(
    <tbody>
      <tr>
        <th>
          {text}
        </th> 
        <td>
          {Math.round(value*10)/10} {text2}
        </td>
      </tr>
    </tbody>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good +1)
  }

  const handleNeutral = () => {
    setNeutral(neutral +1)
  }

  const handleBad = () => {
    setBad(bad +1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


export default App
