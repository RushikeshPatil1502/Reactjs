import { useContext } from "react"
import { GlobalContext } from "../../05-useContext-ContextApi"

function ContextText() {
    
    const {theme} = useContext(GlobalContext);

    return (
      <h1 className={
        theme === 'light' ? 'px-4 py-2 bg-white text-blue-300' : 'px-4 py-2 bg-black text-yellow-300 text-5xl'
      }>Hello</h1>
    )
  }
  
  export default ContextText