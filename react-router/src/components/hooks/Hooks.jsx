import { useEffect } from "react"
import { useRef } from "react"

function Hooks() {
    const divElRef = useRef()

    useEffect(()=>{
       const getDivElRef = divElRef.current
       console.log(getDivElRef);
    },[])
  return (
    <>
       <div>useRef , useCallBack , useMemo Hook</div>
       <div ref={divElRef}>Get Reference</div>
    </>
  )
}

export default Hooks