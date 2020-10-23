import React from 'react'
import Select from 'react-select'
import Form from 'react-bootstrap/Form'
import Sets from '../Sets/Sets'

var exerciseList = {
        'Barbell Bench Press': {'Pectorals': 1, 'Triceps': 1, 'Front_Deltoids': 1},
        'Close Grip Barbell Bench Press': {'Pectorals': 1, 'Triceps': 1, 'Front_Deltoids': 1},
        'DB Bench Press': {'Pectorals': 1, 'Triceps': 1, 'Front_Deltoids': 1},
        'DB Incline Bench Press': {'Pectorals':1,'Front_Deltoids':1, 'Triceps':1},
        'Decline Press Machine': {'Pectorals':1, 'Triceps':2},
        'Back Squat': {'Quadriceps': 1, 'Glutes': 2, 'Lower_Back': 3},
        'Paused Back Squats': {'Quadriceps': 1, 'Glutes': 2, 'Lower_Back': 3},
        'Front Squat': {'Quadriceps': 1, 'Trapezius': 3},
        'Paused Front Squats': {'Quadriceps': 1, 'Trapezius': 3},
        'Smith Machine Hip Thrust': {'Glutes': 1, 'Hamstrings': 2},
        'Barbell Overhead Press': {'Front_Deltoids': 1,'Side_Deltoids': 2,'Triceps': 2},
        'DB Overhead Press': {'Front_Deltoids': 1,'Side_Deltoids': 2,'Triceps': 2},
        'DB Lateral Raises': {'Side_Deltoids':1},
        'Lateral Raise Machine': {'Side_Deltoids':1},
        'Deadlift': {'Hamstrings': 1,'Glutes': 1,'Lower_Back': 1,'Forearms': 1,'Quadriceps': 2,'Trapezius': 2},
        'Hex Bar Deadlift': {'Hamstrings': 1,'Glutes': 1,'Lower_Back': 1,'Quadriceps': 2,'Trapezius': 2},
        'Romanian Deadlift': {'Hamstrings': 1,'Glutes': 1,'Lower_Back': 1,'Forearms': 2},
        'Unilateral Leg Press': {'Quadriceps': 1},
        'Seated Calf Raises': {'Calves': 1},
        'Seated Calf Press Machine': {'Calves':1},
        'Abdominal Crunch Machine': {'Abdominals': 1},
        'Decline Crunch': {'Abdominals': 1},
        'Seated Leg Curls': {'Hamstrings': 1},
        'Lying Leg Curls': {'Hamstrings': 1},
        'Gliding Leg Curls': {'Hamstrings': 1, 'Glutes': 3},
        'Leg Extensions': {'Quadriceps': 1},
        'Back Extensions': {'Lower_Back': 1, 'Hamstrings':3, 'Glutes': 3},
        'Single DB Split Squat': {'Quadriceps': 1, 'Hamstrings': 2,'Glutes': 2},
        'DB Split Squat': {'Quadriceps': 1, 'Hamstrings': 2, 'Glutes': 2},
        'Leg Press Calf Raises': {'Calves': 1},
        'Cable Bicep Curls': {'Biceps': 1},
        'Cable Flys': {'Pectorals': 1},
        'Rear Delt Facepulls': {'Rear_Deltoids':1},
        'Barbell Pendlay Row': {'Trapezius':1, 'Lats':1, 'Biceps':2, 'Rear_Deltoids':2, 'Lower_Back':3},
        'Barbell Bent Over Row': {'Trapezius':1, 'Lats':1, 'Biceps':2, 'Rear_Deltoids':2, 'Lower_Back':3},
        'Lat Pulldowns': {'Lats':1, 'Trapezius':2, 'Biceps':2},
        'EZ Bar Wrist Curls': {'Forearms':1},
        'Walking DB Lunges': {'Quadriceps':1, 'Hamstrings':1,'Glutes':1},
        'Ab Wheel Rollouts': {'Abdominals':1},
        'DB Bicep Curls': {'Biceps':1},
        'EZ Bar Bicep Curls': {'Biceps':1},
        'Machine Preacher Curls': {'Biceps':1},
        'Reverse Pec Deck': {'Rear_Deltoids':1},
        'Pull Ups': {'Lats':1, 'Trapezius':1, 'Biceps':2},
        'Low Row Machine': {'Trapezius':1, 'Lats':2, 'Rear_Deltoids':2},
        'High Row Machine': {'Trapezius':1, 'Lats':2, 'Rear_Deltoids':2},
        'French Press': {'Triceps':1}
   }

var exerciseDropDownList = Object.keys(exerciseList)

var exercise_options = []
var i;
for (i = 0; i <= exerciseDropDownList.length; i++) {
        exercise_options.push({ value: exerciseDropDownList[i], label: exerciseDropDownList[i]})
}
      
const ExerciseList = () => {

        return (
                <div>
                        <Form>
                                <Form.Group controlId='formSelectExercise'>
                                        <Form.Label>List of Exercises </Form.Label>
                                        <Select options={exercise_options}/>
                                </Form.Group>
                        </Form>
                        <Sets/>
                </div>
        )

}

export default ExerciseList