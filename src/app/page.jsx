"use client";
import React, { useEffect } from 'react'

const Home = () => {

  
  return (
    <div>
        <h1 style={{ color : 'red', textAlign : 'center', fontSize : 100}}>Welcome to my Website </h1>
        <input className='my-input' type="text" />
        <button className="btn btn-primary"> Save </button>
        <br />
    </div>
  )
}

export default Home;