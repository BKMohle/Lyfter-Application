import React from "react";
import Title from "../components/RecordComponents/Title/Title";
import Container from "react-bootstrap/Container";
import SelectDate from "../components/RecordComponents/Date/Date";
import ExerciseList from "../components/RecordComponents/Exercises/Exercises";
import { Form } from "react-bootstrap";

const LyfterApp = (props) => {
  // const [formData, setFormData] = useState({}) don't worry about it
  // const onChange = (event)=>{
  //   let obj = {...formData}
  //   obj[event.target.name] = event.target.value
  //   setFormData(obj)
  // }
  return (
    <Container>
      <Form>
        <Title />
        <SelectDate />
        <ExerciseList />
      </Form>
    </Container>
  );
};

export default LyfterApp;
