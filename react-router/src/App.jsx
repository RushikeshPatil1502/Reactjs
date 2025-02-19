import {  Route, Routes } from "react-router-dom"
import RecipesList from "../pages/Recipes/Recipes"
import CommentsList from "../pages/Comments/Comments"
import RecipesDetails from "../pages/Recipes/RecipesDetails"
import NotFound from "../pages/Not-found/NotFound"
import Layout from "./components/layout"
import ReactHookForm from "./components/react-hook-form/ReactHookForm"
import Hooks from "./components/hooks/Hooks"

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Layout />}>
            <Route path="recipe-list" element={<RecipesList/>} />
            <Route path="comments-list" element={<CommentsList/>} />
            <Route path="recipe-list/:id" element={<RecipesDetails/>} />
            <Route path="react-hook-form" element={<ReactHookForm/>} />
            <Route path="hooks" element={<Hooks/>} />
        </Route>        
        <Route path="*" element={<NotFound/>} />
      </Routes>
      
    </>

  )
}

export default App