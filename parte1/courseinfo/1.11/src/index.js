import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  return(
    <tbody>
      <tr>
        <th>
          {props.texto}
        </th>
        <td>
          {props.estadistica}
        </td>
      </tr>
    </tbody>
  )
}

const MostrarEstadisticas = ({all}) => {
  if(all[3] === 0){
    return(
      <div>No feedback given</div>
    )
  }

  return(
    <div>
      <table>
        <Statistics texto={'Good'} estadistica={all[0]} />
        <Statistics texto={'Neutral'} estadistica={all[1]} />
        <Statistics texto={'Bad'} estadistica={all[2]} />
        <Statistics texto={'All'} estadistica={all[3]} />
        <Statistics texto={'Average'} estadistica={all[4]} />
        <Statistics texto={'Positive'} estadistica={all[5]} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleneutral = () => {
    setNeutral(neutral + 1)
  }

  const handlebad = () => {
    setBad(bad + 1)
  }

  let sumaOpiniones = good + neutral + bad
  let promedioOpiniones = sumaOpiniones / 3
  let porcentajeOpinionesPositivas = good * 100 / sumaOpiniones

  return(
    <div>
      <div>
        <p>
          <b>Give Feedback</b>
        </p>
        </div>
      <div>
        <Button onClick={handleGood} text='Good'/>
        <Button onClick={handleneutral} text='Neutral'/>
        <Button onClick={handlebad} text='Bad'/>
      </div>
      <div>
        <p>
          <b>Statistics</b>
        </p>
        <MostrarEstadisticas all={[good, neutral, bad, sumaOpiniones, promedioOpiniones, porcentajeOpinionesPositivas]}/>
      </div>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
