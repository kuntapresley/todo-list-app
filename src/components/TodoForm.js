import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value,setValue]=useState("")
    const handleSumbit=e=>{
        e.preventDefault()
        addTodo(value)
        setValue=""
    }
  return (

    < form className='TodoForm' onSubmit={handleSumbit}>
      <input type='text' className='todo-input' placeholder='what is the task today' value={value}
       onChange={(e)=>setValue(e.target.value)}></input>

    <button  type='submit' className="todo-btn" >add task</button>
    </form>
  )
}

export default TodoForm

