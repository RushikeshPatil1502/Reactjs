import { Link } from "react-router-dom"

function Home() {
  // const navigate = useNavigate()
  return (
    
    <div className="flex flex-col gap-4">
        
        <div className="w-full flex p-4 gap-4 items-center">
           <Link className="px-5 py-2 border text-black border-black rounded-lg" to={'home'}>Home Page</Link>
           <Link className="px-5 py-2 border text-black border-black rounded-lg" to={'recipe-list'}>Recipe Page</Link>
           <Link className="px-5 py-2 border text-black border-black rounded-lg" to={'comments-list'}>Comments Page</Link>
           <Link className="px-5 py-2 border text-black border-black rounded-lg" to={'react-hook-form'}>Form Page</Link>
        </div>

        {/* <div className="py-16 text-4xl font-bold w-full bg-black mt-10 flex justify-center items-center">
        <button onClick={()=> navigate('recipe-list')} className="px-5 py-2 border text-white border-white rounded-lg">To Recipe Page</button>
        <button onClick={()=> navigate('comments-list')} className="px-5 py-2 border text-white border-white rounded-lg ml-10">To Comments Page</button>
      </div>

      <div className="p-10">
        <Link className="px-5 py-2 border text-black border-black rounded-lg" to={'recipe-list'}>To The Recipe Page (Using Link)</Link>
      </div> */}
    </div>
  )
}

export default Home