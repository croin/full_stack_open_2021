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
  const part1 = {
    name: 'Fundamentals of React',
    excercises : 10
  }

  const part2 = {
    name: 'Using props to pass data',
    excercises : 7
  }

  const part3 = {
    name: 'State of a component',
    excercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content part1={part1.name} excercises1={part1.excercises} part2={part2.name} excercises2={part2.excercises} part3={part3.name} excercises3={part3.excercises} />
      <Total excercises1={part1.excercises} excercises2={part2.excercises} excercises3={part3.excercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
