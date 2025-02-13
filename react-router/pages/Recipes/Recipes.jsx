import useFetch from "../../src/hooks/useFetch"

function RecipesList() {
 
  const {data,loading,error} = useFetch('https://dummyjson.com/recipes')

  console.log(data?.recipes);
  console.log(loading);
  console.log(error);

  

  return (
    <>
      <div className="w-full py-10 flex justify-center items-center">
       {
        loading && <h1>Loading...</h1>
       }

       <ul className="flex flex-wrap w-full justify-center items-center gap-4 p-24">
        {
          data?.recipes ? 
          data?.recipes?.map((recipeItem,index)=> 
            <div key={index} className="w-[300px] px-4 py-1 flex flex-col gap-4 justify- text-start items-start shadow shadow-blue-50">
               <img className="rounded-xl" src={recipeItem?.image} alt={recipeItem?.name} />
               <h1 className="text-lg font-semibold">{recipeItem?.name}</h1>
            </div>
          )
           : null
        }
       </ul>
      </div>
    </>
    
  )
}

export default RecipesList