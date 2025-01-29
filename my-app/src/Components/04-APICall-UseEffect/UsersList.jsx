import React from 'react'

function UsersList({name,age}) {
  return (
    <div className=' px-2 py-2 bg-white flex flex-col'>
        <span>{name}</span>
        <span>{age}</span>
    </div>
  )
}

export default UsersList