'use client'
import React from 'react'

const StateManagement = () => {

    let myAge = 20;

  return (
    <div>
        <div className='container'>
            <h1>State Management</h1>
            <hr />
            <h2>
                {myAge}
            </h2>
            <button className='btn btn-danger'
            onClick={() => {myAge++; console.log(myAge);} }>Increase My Age</button>
        </div>
    </div>
  )
}

export default StateManagement;