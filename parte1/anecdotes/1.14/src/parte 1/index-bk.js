import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

   return(
    <div>
      <p>Hello {name}, you are {age} year old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return(
    <div>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
