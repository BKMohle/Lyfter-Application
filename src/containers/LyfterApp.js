import React from 'react'
import Title from '../components/RecordComponents/Title/Title'
import Container from 'react-bootstrap/Container'
import SelectDate from '../components/RecordComponents/Date/Date'
import ExerciseList from '../components/RecordComponents/Exercises/Exercises'
import Sets from '../components/RecordComponents/Sets/Sets'

const LyfterApp = (props) => {
    return (
      <Container>
        <Title />
        <SelectDate />
        <ExerciseList />
        <Sets />
      </Container>
    )
  }
  
  export default LyfterApp