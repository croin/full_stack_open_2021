import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <p>
        Capitulo{props.part1}, {props.excercises1} ejercicios 
      </p>
      <p>
        Capitulo{props.part2}, {props.excercises2} ejercicios 
      </p>
      <p>
        Capitulo{props.part3}, {props.excercises3} ejercicios 
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <p>Number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={part1} excercises1={excercises1} part2={part2} excercises2={excercises2} part3={part3} excercises3={excercises3} />
      <Total excercises1={excercises1} excercises2={excercises2} excercises3={excercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
