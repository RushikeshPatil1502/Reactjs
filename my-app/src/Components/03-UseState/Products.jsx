import { useState } from "react"
import Button from "../02-List-Practice/Button"

function Products() {
    const [flag , setFlag] = useState(true)
    let [count , setCount] = useState(0)
    const [changeColor , setChangeColor] = useState(true)

    function handleToggleText () {
        setFlag(!flag)
        setCount(count+1)
        setChangeColor(!changeColor)
    }

  return (
    <>

        {
            flag ? <h3>Hello</h3> : <h3>Bye</h3>
        }
        <p>Count: {count}</p>
        <p className={changeColor ? 'text-red-200' : 'text-purple-400'}>Color Changing Here</p>
        <Button clickFunction={handleToggleText} buttonDescription='Toggle' />        
    </>
  )
}

export default Products