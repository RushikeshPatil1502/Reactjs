import React from 'react'
import ListChels from './ListChels'

const chelsList = [
    {
        name: 'Cole Palmer',
        age: 22,
        goals: 36
    },
    {
        name: 'Enzo Fernandez',
        age: 24,
        goals: 6
    },
    {
        name: 'Reece James',
        age: 25,
        goals: 8
    },
]

function ChelsPlayers() {
  return (
    <>
    
       <ul className=' px-3 py-2 bg-cyan-300 rounded-xl mt-10'>
       <div>List Rendering:</div>
        {
            chelsList.map(
                (players , index) => 
                    <ListChels key={index} 
                               playersName={players.name} 
                               playersAge={players.age} 
                               playersGoals={players.goals} 
                    />
            )
        }
       </ul>
    </>
  )
}

export default ChelsPlayers