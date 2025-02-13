import { useEffect, useState } from "react"

function useFetch(url , options={}) {
   const [data , setData] = useState([])
   const [loading , setLoading] = useState(false)
   const [error , setError] = useState(null)

   async function fetchData() {
      setLoading(true)
      
      try{
        const response = await fetch(url , {...options})
        if(!response.ok) throw new Error (response.statusText) 
        const result = await response.json()

        if(result){
            setData(result)
            setLoading(false)
            setError(null)
        }
      } catch(e){
        console.log(e);
        setLoading(false)
        setError(e)
      }
   }

   useEffect(()=>{
     fetchData()
   },[url])

   return {
    data,
    loading,
    error
   }
}

export default useFetch