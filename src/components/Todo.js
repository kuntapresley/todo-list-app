import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{FaPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task,toggleComplete, editTodo,deleteTodo}) => {
  return (
    <div className='Todo'>
    <p onClick={()=> toggleComplete(task.id)} className={`${task.completed?
    'completed' :'' } `}>{task.task}</p>
    
    <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
    <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo()}/>
    
    </div>
  )
}

export default Todo
