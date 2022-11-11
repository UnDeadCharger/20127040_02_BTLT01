import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { BsInfoSquare} from 'react-icons/bs';
import {AiOutlineFileAdd} from 'react-icons/ai';
const Todo = ({ todos, infos, completeTodo, removeTodo, updateTodo, updateInfo }) => {
  
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const [info, setInfo] = useState({
    id: null,
    value: ''
  });
  const [getInfo, setGetInfo] = useState({
    id: null,
    value: ''
  });


  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  const submitInfo = value => {
    updateInfo(info.id, value);
    setInfo({
      id: null,
      value: ''
    });
  };


  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (info.id){
    return <TodoForm info={info} onSubmit={submitInfo} />;
  }
  if (getInfo.id){
    
    let IDInfo = infos.map(storedInfo =>{
      if (storedInfo.id === getInfo.id){
        return <div className='info-row complete'
        key={storedInfo.id}> </div>
      }
    });
     
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <AiOutlineFileAdd 
          onClick={() => setInfo({id: todo.id, value: "JERMACRAFT"})}
          className='info-icon'
        />
        <BsInfoSquare 
          onClick={() => setGetInfo({id: todo.id, value: "JERMACRAFT"})}
          className='get-info-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        
      </div>
    </div>
  ));
};

export default Todo;