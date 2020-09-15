import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SelectDate = (props) => {
   const [selectedDate, setSelectedDate] = useState(new Date())
   return (
       <center>
            <div>
                <Form>
                    <Form.Group controlId='formSelectDate'>
                        <Form.Label>Workout Date </Form.Label>
                            <DatePicker 
                                selected = {selectedDate}
                                onChange = {date => setSelectedDate(date)}
                                dateFormat = 'MM/dd/yyyy'
                                maxDate = {new Date()}
                                isClearable
                            />
                    </Form.Group>
                </Form>
            </div>
       </center>
   )
}

export default SelectDate