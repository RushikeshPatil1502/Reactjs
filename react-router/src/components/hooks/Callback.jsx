import { useCallback, useState } from "react"
import Counter from "./Counter"

function Callback() {
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)

    const memorizedValueOne = useCallback(()=>
        setCountOne(countOne + 1),[countOne]
    )
    const memorizedValueTwo = useCallback(()=>
        setCountTwo(countTwo + 1),[countTwo]
    )

  return (
    <div>
        <Counter countValue={countOne} onClick={memorizedValueOne} />
        <Counter countValue={countTwo} onClick={memorizedValueTwo} />
    </div>
  )
}

export default Callback