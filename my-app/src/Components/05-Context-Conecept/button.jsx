import { useContext } from "react"
import { GlobalContext } from "../../05-useContext-ContextApi"

function ContextButton() {
  
  const {handleChange} = useContext(GlobalContext)

  return (
    <button onClick={handleChange} className="px-4 py-2 rounded-lg border">Change Theme</button>
  )
}

export default ContextButton