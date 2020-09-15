import React from 'react'
import Title from '../components/RecordComponents/Title/Title'
import Container from 'react-bootstrap/Container'
import SelectDate from '../components/RecordComponents/Date/Date'

const LyfterApp = (props) => {
    return (
      <Container>
        <Title />
        <SelectDate />
      </Container>
    )
  }
  
  export default LyfterApp