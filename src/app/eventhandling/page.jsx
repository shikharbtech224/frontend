'use client'
import React, { useRef } from 'react'

const EventHandling = () => {
const dateRef = useRef(null);

  return (
    <div>
        <h1>EventHandling</h1>
        <hr />
        <button className='btn btn-primary mb-5' onClick={() => { alert('Button clicked')}}>Click</button>
       <input type="text" className='form-control'
        onChange={(e) => {console.log(e.target.value);}} />

        <input type="color" onChange={(e) => { document.body.style.backgroundColor = e.target.value;}} />

        <button className='btn btn-success mt-4' onClick={ () => { const name = prompt("Enter your name"); alert('Your name is : '+name);}}>Display Name</button>
        
    <input type="date" className='mt-5' ref={dateRef} />
    <button className='btn btn-danger mt-5' onClick={ () => {
        const birthDate = new Date(dateRef.current.value);
        
        alert( new Date().getFullYear() - birthDate.getFullYear())}}>Display Age</button>

        </div>
  )
}

export default EventHandling;