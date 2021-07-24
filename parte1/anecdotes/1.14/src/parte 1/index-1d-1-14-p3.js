import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const MayorVotacion = ({votos}) => {
  let mayorAmenor = {...votos}
  let indiceMayorValor, mayorValor

  const organizarVotos = () => {

    mayorAmenor = Object.values(mayorAmenor).sort((a,b) => b - a)
    mayorValor = mayorAmenor[0]

    indiceMayorValor = Object.keys(votos).find(key => votos[key] === mayorValor)
  }

  organizarVotos()

  if(!mayorValor){
    return(
      <div>
        <p>
          <b>Aún no hay votaciones!!!</b>
        </p>
      </div>
    )
  }

  return(
    <div>
      <h2>Anecdote with most votes</h2>
      <p>
        {anecdotes[indiceMayorValor]}<br/>
      </p>
      <p>
        <b>has {mayorValor} votes</b>
      </p>
    </div>
  )
}

const App = (props) => {
  const [votosAnecdotas, setVotosAnecdotas] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0
  })

  let cantidadAnecdotas = anecdotes.length
  const [selected, setSelected] = useState(Math.floor((Math.random()*cantidadAnecdotas)))

  const mostrarAnecdota = () => {
    setSelected(Math.floor((Math.random()*cantidadAnecdotas)))
  }

  const sumarVotos = () => {
    const votos = { ...votosAnecdotas }
    votos[selected] += 1
    setVotosAnecdotas(votos)
  }

  return(
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {props.anecdotes[selected]} <br/>
      </p>
      <p>
        <b>has {votosAnecdotas[selected]} votes</b>
      </p>
      <button onClick={sumarVotos}>Vote</button>
      <button onClick={mostrarAnecdota}>Next anecdote</button>
      <MayorVotacion votos={votosAnecdotas} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
