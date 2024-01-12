'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const StateManagement = () => {

    let myAge = 20;

    const [likes, setLikes] = useState(0);
    const [imgLink, setImgLink] = useState("")

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

            <h2 classname='mt-4'> Likes : {likes}</h2>
            <button className='btn btn-primary' onClick={() => { setLikes(likes+1) }}>Like</button>
            
            <input onChange={ (e) => {setImgLink(e.target.value); }} type="text" className='form-control mt-5' placeholder='Paste Link Here...'/>
           
            <img src={imgLink} alt="" />

            <img width={600} src={imgLink} alt="" />
        </div>
    </div>
  )
}

export default StateManagement;