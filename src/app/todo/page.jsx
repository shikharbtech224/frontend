'use client'
import React, { useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const nums = [2 , 5 , 7 , 9 , 3 ];

    const addTodo = (e) => {
        if(e.key ==='Enter'){
            console.log(e.target.value);

            setTodoList([ { completed : false, text : e.target.value }, ...todoList ]);
            console.log([ { completed : false, text : e.target.value }, ...todoList ]);

            // Clear the input field
            e.target.value ="";

        }
    }

    const deleteTodo = (index) => {

        const temp = todoList;
        todoList.splice(index, 1);
        setTodoList([...temp]);
    }

        const completeTodo = (index) => {
            const temp = todoList;
            temp[index].completed = !temp[index].completed;
            setTodoList([...temp]);
            console.log(temp);
        }

  return (
    <div>
        <div className='container py-4'>

            <h3>To Do Applicaion</h3>

                <div className='card shadow'>
                    <div className='card-header bg primary text-white'>
                        <input onKeyDown={addTodo} type="text" className='form-control' />      
                    </div>
                </div>
            <div className='card-body border border-primary border-3'> 
            {todoList.map( (todo, index) => {return <div className='d-flex justify-content-between mb-3 align-items-center'> 
                <p>{todo.text}</p> 
                {
                    todo.completed ?
                <span className='badge bg-success'>Complete</span>
                :
                <span className='badge bg-warning'>Incomplete</span>
            }
                <div>
                    <button onClick={ () => { completeTodo(index) } } className='btn btn-primary me-3'>{todo.completed ? 'Undo' : 'Complete'}</button>
                    <button onClick={ () => {deleteTodo(index) } } className='btn btn-danger'>Danger</button>
                </div>
                </div> } )} 
            </div>
        </div>
    </div>
  )
}

export default Todo;