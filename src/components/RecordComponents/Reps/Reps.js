import React from 'react'
import Form from 'react-bootstrap/Form'

const Reps = () => {
   return (
      <div>
         <Form>
            <Form.Group controlId='formSetWeight'>
               <Form.Label>Reps </Form.Label>
               <Form.Control type="reps"/>
            </Form.Group>
         </Form>
      </div>
   )
}

export default Reps