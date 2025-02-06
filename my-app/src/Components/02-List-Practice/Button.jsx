import React from 'react'

function Button({buttonDescription , clickFunction , onSubmit}) {
  return (
    <div>
        <button onSubmit={onSubmit} onClick={clickFunction} className='mt-3 px-6 py-2 border rounded-4xl'>{buttonDescription}</button>
    </div>
  )
}

export default Button