import React from 'react'
import Form from 'react-bootstrap/Form'

const WorkingSet = () => {
   
   return (
      <>
      <div>
         <Form>
            <Form.Group controlId='formSetWeight'>
               <Form.Label>lbs </Form.Label>
               <Form.Control type="weight" />
            </Form.Group>
         </Form>
      </div>
      <div>
         <Form>
            <Form.Group controlId='formSetWeight'>
               <Form.Label>Reps </Form.Label>
               <Form.Control type="reps"/>
            </Form.Group>
         </Form>
      </div>
      </>
   )

}

export default WorkingSet