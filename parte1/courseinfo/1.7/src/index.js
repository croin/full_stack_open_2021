import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const DisplayGood = ({comentarios}) => <div>Good {comentarios}</div>
const DisplayNeutral = ({comentarios}) => <div>Neutral {comentarios}</div>
const DisplayBad = ({comentarios}) => <div>Bad {comentarios}</div>
const DisplayAll = ({todos}) => <div>All {todos}</div>
const DisplayAverage = ({promedioOpiniones}) => <div>Average {promedioOpiniones}</div>
const DisplayPorcentajePositivas = ({porcentajeOpinionesPositivas}) => <div>Positive {porcentajeOpinionesPositivas}%</div>

const DisplayGen = ({funcion, texto, opinion}) => {
  let sumaOpiniones = opinion[0] + opinion[1] + opinion[2]
  let promedioOpiniones = sumaOpiniones / 3
  let porcentajeOpinionesPositivas = opinion[0] * 100 / sumaOpiniones

  return(
    <div>
      <div>
        <p>
          <b>Give Feedback</b>
        </p>
        </div>
      <div>
        <Button onClick={funcion[0]} text={texto[0]}/>
        <Button onClick={funcion[1]} text={texto[1]}/>
        <Button onClick={funcion[2]} text={texto[2]}/>
      </div>
      <div>
        <p>
          <b>Statistics</b>
        </p>
        <DisplayGood comentarios={opinion[0]} />
        <DisplayNeutral comentarios={opinion[1]} />
        <DisplayBad comentarios={opinion[2]} />
        <DisplayAll todos={sumaOpiniones} />
        <DisplayAverage promedioOpiniones={promedioOpiniones} />
        <DisplayPorcentajePositivas porcentajeOpinionesPositivas={porcentajeOpinionesPositivas} />
      </div>
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

  return(
    <div>
      <DisplayGen funcion={[handleGood, handleneutral, handlebad]} texto={['Good', 'Neutral', 'Bad']} opinion={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
