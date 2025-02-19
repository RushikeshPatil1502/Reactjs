import { useMemo, useState } from "react"
import useFetch from "../Custom-Hooks/useFetch"

function Memo() {
    const {data,loading} = useFetch('https://api.jikan.moe/v4/anime')
    const [flag , setFlag] = useState(false)

    function filterData(getData){
        console.log('this is getting rendered');
        return getData?.length > 0 ? getData.filter(data => data.score > 8) : []
    }

    const memorizedVersion = useMemo(()=>
         filterData(data?.data), [data?.data]
    )

  return (
    <div>
        <h1 className={flag ? 'text-green-300 text-4xl' : 'text-blue-300 text-4xl'}>Use Memo</h1>
        <button className="px-3 py-1 border mb-10" onClick={()=> setFlag(!flag)}>change flag</button>
        {
            memorizedVersion.map((anime,index)=> 
                <h1 key={index}>{anime.title}</h1>
            )
        }
    </div>
  )
}

export default Memo