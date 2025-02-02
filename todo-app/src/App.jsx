import { useEffect } from "react"
import { useState } from "react"
import TodoItem from "./Components/TodoItem"

function App() {

  const [todosList , setTodosList] = useState([])
  const [loadingState, setLoadingState] = useState(false)
  const [errorMsg , setErrorMsg] = useState('')

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

  useEffect(()=>{
     fetchAllTodosList()
  },[])

  return (
    <div className="p-[50px]">
       <h1 className="text-[25px] font-bold">Simple todo app using material ui</h1>
       
       <div className="grid gap-4 grid-cols-4">
            {
              todosList && todosList.length ? 
              todosList.map(todoItem => 
                <TodoItem key={todoItem.id} todo={todoItem.todo}/>
              ) : null
            }
        </div>
    </div>
  )
}

export default App
