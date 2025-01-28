import React from 'react'
import Button from './Button'

function RenderCards({image,name,description}) {
  return (
    <div className=' px-3 py-2 bg-purple-300 flex flex-col items-start rounded-xl'>
        <div className='bg-amber-100 flex w-full rounded-xl h-[200px] justify-center items-center text-center'>
            <div>{image}</div>
        </div>
        <h1 className='mt-3 font-bold'>{name}</h1>
        <p className=' text-lg text-gray-700'>{description}</p>
        <Button buttonDescription='View Profile' />
    </div>
  )
}

export default RenderCards