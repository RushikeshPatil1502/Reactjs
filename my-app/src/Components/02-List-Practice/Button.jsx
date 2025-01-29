import React from 'react'

function Button({buttonDescription , clickFunction}) {
  return (
    <div>
        <button onClick={clickFunction} className='mt-3 px-6 py-2 border rounded-4xl'>{buttonDescription}</button>
    </div>
  )
}

export default Button