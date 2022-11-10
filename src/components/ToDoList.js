import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [infos, setInfos] = useState([{id: null, value:''}]);

    const addTodo = todo => {
        //function
        if(!todo.text || /^\s*$=/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$=/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        console.log(...todos);
    }

    const updateInfo = (infoId, Value) => {
        if(!Value.text || /^\s*$=/.test(Value.text)){
            return
        }

        setInfos([{id: infoId, value: Value}], ...infos)

        console.log(infos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }


    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    };


    return (
    <div>
        <h1> What's the plan for today</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo  todos={todos} infos={infos} completeTodo={completeTodo}  updateTodo={updateTodo} removeTodo={removeTodo} updateInfo={updateInfo}/>

    </div>
  )
}

export default TodoList;