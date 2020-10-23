import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import WorkingSet from './WorkingSet'

const Sets = (props) => {

   const [numberOfSets,setNumberOfSets] = useState(0)

   let sets = []
   
   function AddSet() {
      setNumberOfSets(numberOfSets+1)
   }

   let i;
   for (i = 0; i < numberOfSets; i++) {
      sets.push(<WorkingSet setNumber = {i+1} />)
   }

   return (
      <>
         Set
         <div>
            {sets}
         </div>
         <Button  onClick={AddSet}>+ Add Set</Button>
      </>
   )
}

export default Sets