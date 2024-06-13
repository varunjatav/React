import React, { useMemo } from 'react'

const MarksComponent = ({marks , subject}) => {
    console.log("inside MarksComponent");
    const percent = useMemo(() => {
        console.log("inside Percent");
        return( marks * 100 ) / 100;
    },[marks]) 
   
  return (
    <div>
        <h1>Marks of Student is : {marks}</h1>
        <h1>Subject of Student is : {subject}</h1>
        <h1>Percentage of Student is : {percent} %</h1>
    </div>
  )
}

export default React.memo(MarksComponent);