import React from 'react'

function ListChels({playersName,playersAge,playersGoals}) {
  return (

    <>
    <div className='flex flex-col gap-4 px-3 py-2 mt-6 rounded-xl bg-green-300'>
       <li>{playersName}</li>
       <li>Age: {playersAge}</li>
       <li>Goals Scored For Chelsea: {playersGoals}</li>
    </div>
    </>
  )
}

export default ListChels