import React from 'react'
import Form from 'react-bootstrap/Form'

const Weight = () => {
   return (
      <div>
         <Form>
            <Form.Group controlId='formSetWeight'>
               <Form.Label>lbs </Form.Label>
               <Form.Control type="weight" />
            </Form.Group>
         </Form>
      </div>
   )
}

export default Weight