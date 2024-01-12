'use client'
import React, { useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (e) => {
        if(e.key ==='Enter'){
            console.log(e.target.value);

            setTodoList([ { completed : false, text : e.target.value }, ...todoList ]);
            console.log([ { completed : false, text : e.target.value }, ...todoList ]);

            // Clear the input field
            e.target.value ="";

        }
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
            <div className='card-body border border-primary border-3'></div>
        </div>
    </div>
  )
}

export default Todo;