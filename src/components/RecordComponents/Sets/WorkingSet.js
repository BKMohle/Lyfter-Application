import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const WorkingSets = () => {

   const [weight,setWeight] = useState(null)
   const [reps,setReps] = useState(null)

   return (
      <>
      <div>
         <Form>
            <Form.Group controlId='formSetWeight'>
            <Form.Label>lbs </Form.Label>
            </Form.Group>
         </Form>
      </div>
      <div>
      <Form>
            <Form.Group controlId='formSetWeight'>
            <Form.Label>Reps </Form.Label>
            </Form.Group>
         </Form>
      </div>
      </>
   )

}

export default WorkingSets