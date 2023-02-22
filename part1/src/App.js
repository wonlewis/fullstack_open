const Header = (props) => {
  const course = 'Half Stack application development'
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises}></Part>
      <Part part={parts[1].name} exercises={parts[1].exercises}></Part>
      <Part part={parts[2].name} exercises={parts[2].exercises}></Part>
    </>
  )
}

const Total = (props) => {
  const parts = props.parts
  return(
    <>
      <p>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App