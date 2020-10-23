import React from 'react'
import Reps from '../Reps/Reps'
import Weight from '../Weight/Weight'

const WorkingSet = (props) => {

   return (
      <>
      {props.setNumber}
      <Reps/>
      <Weight/>
      </>
   )

}

export default WorkingSet