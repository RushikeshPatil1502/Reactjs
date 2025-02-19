import React from 'react'
import RenderCards from './RenderCards'

const list = [
    {
        image: 'Image 1',
        name: 'Alex',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        image: 'Image 2',
        name: 'John',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        image: 'Image 3',
        name: 'Webster',
        description: 'Lorem ipsum dolor sit amet.'
    }
]

const flag = true;

function rendertext(getFlag){
   return getFlag ? <h1>Render if true</h1> : <h1>Render if false</h1>
}

const renderBlock = flag ? <h1>VarRender</h1> : <h1>notVarRender</h1>

function Cards() {
  return (
    <>
    <div>Conditionals:</div>
    {
       rendertext(flag)
    }
    <div>
        {renderBlock}
    </div>
    <div className=' px-5 py-5 rounded-xl mt-6 bg-white flex flex-row gap-4'>
        {
            list.map(
                (e , index) => <RenderCards key={index} image={e.image} name={e.name} description={e.description} />
            )
        }
    </div>
    </>
  )
}

export default Cards