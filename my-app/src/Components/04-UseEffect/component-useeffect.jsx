
import React, { useEffect } from 'react'

function ComponentUseeffect() {
    useEffect(()=>{
      console.log('Run only once');
    },[]) 
    // This will only run on page load once similar to didMount 
    // Without the empty array, the code inside useEffect would run every time the component updates.
  return (
    <div>
       <h1>Hiiiiii</h1>
    </div>
  )
}

export default ComponentUseeffect