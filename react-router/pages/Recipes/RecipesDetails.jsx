import { useParams } from "react-router-dom"

function RecipesDetails() {
    const params = useParams()
    console.log(params);

    const {id} = params
  return (
    <div className="w-full py-10 flex justify-center items-center text-4xl font-bold">RecipesDetails of {id} recipe</div>
  )
}

export default RecipesDetails