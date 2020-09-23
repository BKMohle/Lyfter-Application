import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import WorkingSet from './WorkingSet'

const SetNumber = () => {

   const [numberOfSets,setNumberOfSets] = useState(1)

   let sets = []

   function AddSet() {
      setNumberOfSets(numberOfSets+1)
   }

   let i;
   for (i = 0; i < numberOfSets; i++) {
      sets.push(<WorkingSet/>)
   }

   return (
      <>
         Set
         <div>
            {sets}
         </div>
         <Button type="submit" onClick={AddSet}>+ Add Set</Button>
      </>
   )
}

export default SetNumber