import { Link, Route, Routes, useNavigate } from "react-router-dom"
import RecipesList from "../pages/Recipes/Recipes"
import CommentsList from "../pages/Comments/Comments"

function App() {

  const navigate = useNavigate()
  return (
    <>
      <div className="py-16 text-4xl font-bold w-full bg-black mt-10 flex justify-center items-center">
        <button onClick={()=> navigate('recipe-list')} className="px-5 py-2 border text-white border-white rounded-lg">To Recipe Page</button>
        <button onClick={()=> navigate('comments-list')} className="px-5 py-2 border text-white border-white rounded-lg ml-10">To Comments Page</button>
      </div>

      <div className="p-10">
        <Link className="px-5 py-2 border text-black border-black rounded-lg" to={'recipe-list'}>To The Recipe Page (Using Link)</Link>
      </div>
      
      <Routes>
        <Route path="/recipe-list" element={<RecipesList/>} />
        <Route path="/comments-list" element={<CommentsList/>} />
      </Routes>
    </>

  )
}

export default App