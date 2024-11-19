import React, { useState, useEffect} from 'react'
import axios from 'axios'

const backendAddress ="http://localhost:5000/todos"

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=> {
    // Fetch data from the Express server
    axios.get(backendAddress).then(response => setTodos(response.data)).catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <ul>
        {todos.map(todo =>(
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App