import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
    return(
      <>
        <p>
          {props.part1} {props.excercises1}
        </p>
        <p>
          {props.part2} {props.excercises2}
        </p>
        <p>
          {props.part3} {props.excercises3}
        </p>
      </>
    )
}

const Content = (props) => {
  return(
    <>
      <Part part1={props.part1} excercises1={props.excercises1} />
      <Part part2={props.part2} excercises2={props.excercises2} />
      <Part part3={props.part3} excercises3={props.excercises3} />
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
