import { useEffect, useState } from "react"
import Button from "../02-List-Practice/Button"

function Products() {
    const [flag , setFlag] = useState(true)
    let [count , setCount] = useState(0)
    const [changeColor , setChangeColor] = useState(true)
    const [style , setStyle] = useState(false)

    function handleToggleText () {
        setFlag(!flag)
        setCount(count+1)
        setChangeColor(!changeColor)
    }

    // useEffect(()=>{
    //     setCount(count+1)
    // },[])

    useEffect(() => {
      console.log('Changes');
      if(count > 10) setStyle(true)
    },[count , style]) //this will run whenever count changes

  return (
    <>

        {
            flag ? <h3>Hello</h3> : <h3>Bye</h3>
        }
        <p className={style ? 'text-violet-200 font-bold text-6xl' : 'text-blue-400 text-base'}>Count: {count}</p>
        <p className={changeColor ? 'text-red-200' : 'text-purple-400'}>Color Changing Here</p>
        <Button clickFunction={handleToggleText} buttonDescription='Toggle' />        
    </>
  )
}

export default Products