import { useEffect } from "react"
import { useState } from "react"
import TodoItem from "./Components/TodoItem"
import TodoDetails from "./Components/TodoDetails"
function App() {

  const [todosList , setTodosList] = useState([])
  const [loadingState, setLoadingState] = useState(false)
  const [errorMsg , setErrorMsg] = useState('')

  const [todoDetails , setTodoDetails] = useState(null)
  const [openDialog , setOpenDialog] = useState(false)

  async function fetchAllTodosList() {
    try{
      setLoadingState(true)
      const apiResponse = await fetch('https://dummyjson.com/todos')
      const result = await apiResponse.json()

      if(result?.todos && result?.todos.length > 0){
        setTodosList(result?.todos)
        setLoadingState(false)
        setErrorMsg('')
      }else{
        setTodosList([])
        setLoadingState(false)
        setErrorMsg('')
      }
    }catch(e){
      console.log(e);
      setErrorMsg('Some error occured')
    }
  }

  async function fetchAllTodoDetails(getTodoId) {
      try {
        const apiResponse = await fetch(`https://dummyjson.com/todos/${getTodoId}`)
        const details = await apiResponse.json()

        if(details){
          setTodoDetails(details)
          setOpenDialog(true)
        } else{
          setTodoDetails(null)
          setOpenDialog(false)
        }
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
     fetchAllTodosList()
  },[])

  if(loadingState) return <div className=" flex justify-center items-center min-h-screen">
       <div className="animate-spin border-t-8 h-32 w-32 rounded-full border-black"></div>
    </div>

  return (
    <div className="p-[50px]">
       <h1 className="text-[25px] font-bold">Simple todo app using material ui</h1>
       
       <div className="grid gap-4 grid-cols-4">
            {
              todosList && todosList.length ? 
              todosList.map(todoItem => 
                <TodoItem key={todoItem.id} todo={todoItem.todo} fetchAllTodoDetails={fetchAllTodoDetails} todoId={todoItem.id} />
              ) : null
            }
        </div>

        <TodoDetails todos={todoDetails?.todo} open={openDialog} setOpenDialog={setOpenDialog}/>
    </div>
  )
}

export default App
