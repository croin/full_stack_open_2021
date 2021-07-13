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
  // console.log(props.parts)
  return(
    <>
      <Part part1={props.parts[0].name} excercises1={props.parts[0].excercises} />
      <Part part2={props.parts[1].name} excercises2={props.parts[1].excercises} />
      <Part part3={props.parts[2].name} excercises3={props.parts[2].excercises} />
    </>
  )
}

const Total = (props) => {
  // console.log(props.parts[0])
  return(
    <>
    <p>Number of excercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises : 10
      },
      {
        name: 'Using props to pass data',
        excercises : 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
