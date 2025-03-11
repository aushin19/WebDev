import { useState } from "react"

type todoType = {
    taskName: string
}


const Todo = () => {
    const [input, setInput] = useState<string>("")
    const [todos, setTodos] = useState<todoType[]>([])
  return (
    <div>
        <input type="text" placeholder="Enter Todos..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={() => setTodos([...todos, {taskName: input}])}>Add Todo</button>

        {
            todos && todos.map((todo, index) => {
                return (
                    <li key={index}>{todo.taskName}</li>
                )
            })
        }
    </div>
  )
}

export default Todo