import React, {useState} from 'react'
import TodoForm from './TodoForm'
function ToDoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        //function
        if(!todo.text || /^\s*$=/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    }
    
    return (
    <div>
        <h1> What's the plan for today</h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default ToDoList