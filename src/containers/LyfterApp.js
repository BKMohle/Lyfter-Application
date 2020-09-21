import React from 'react'
import Title from '../components/RecordComponents/Title/Title'
import Container from 'react-bootstrap/Container'
import SelectDate from '../components/RecordComponents/Date/Date'
import ExerciseList from '../components/RecordComponents/Exercises/Exercises'

const LyfterApp = (props) => {
    return (
      <Container>
        <Title />
        <SelectDate />
        <ExerciseList />
      </Container>
    )
  }
  
  export default LyfterApp