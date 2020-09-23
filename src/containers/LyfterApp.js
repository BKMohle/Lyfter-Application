import React from 'react'
import Title from '../components/RecordComponents/Title/Title'
import Container from 'react-bootstrap/Container'
import SelectDate from '../components/RecordComponents/Date/Date'
import ExerciseList from '../components/RecordComponents/Exercises/Exercises'
import SetNumber from '../components/RecordComponents/Sets/Sets'

const LyfterApp = (props) => {
    return (
      <Container>
        <Title />
        <SelectDate />
        <ExerciseList />
        <SetNumber />
      </Container>
    )
  }
  
  export default LyfterApp