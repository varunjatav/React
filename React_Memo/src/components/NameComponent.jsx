import React from 'react'

const NameComponent = ({name}) => {
    console.log("inside NameComponent");
  return (
    <div>
        <h1>Name of Student is : {name}</h1>
    </div>
  )
}

export default React.memo(NameComponent);