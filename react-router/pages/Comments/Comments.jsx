import useFetch from "../../src/hooks/useFetch"

function CommentsList() {
 
  const {data,loading,error} = useFetch('https://dummyjson.com/comments')

  console.log(data?.comments);
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
          data?.comments ? 
          data?.comments?.map((data,index)=> 
            <div key={index} className="w-[300px] px-4 py-1 flex flex-col gap-2 justify- text-start items-start shadow shadow-blue-50">
               <h1 className="text-xl font-bold px-3 py-1 border border-gray-200 rounded-xl">{data?.body}</h1>
               <h1>👍:{data?.likes}</h1>
            </div>
          )
           : null
        }
       </ul>
      </div>
    </>
    
  )
}

export default CommentsList