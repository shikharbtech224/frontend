'use client';
import React, { useState } from 'react';
import './chat.css';

const Chat = () => {

    const [todoList, setTodoList] = useState([]);

    const addTodo = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);

            setTodoList([{ completed: false, text: e.target.value }, ...todoList]);

            console.log([{ completed: false, text: e.target.value }, ...todoList]);

            // Clear the input field
            e.target.value = "";
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

                <h3 className='text-center'>Chat App</h3>
                <div className='card shadow'>
                    
                    <div className='card-body border border-primary border-3 chat-body'>
                        {todoList.map((todo, index) => {
                            // eslint-disable-next-line react/jsx-key
                            return <div className='chat-bubble'>
                                <p>{todo.text}</p>
                            </div>
                        })}
                    </div>
                    <div className='card-footer bg-primary text-white d-flex'>
                        <input onKeyDown={addTodo} type="text" className='form-control' />
                        <button className='btn btn-secondary'>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat;