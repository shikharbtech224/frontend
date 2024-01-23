'use client';
import React, { useEffect } from 'react'

const ManageUser = () => {

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data = await res.json();

        console.table(data);
    }

    useEffect(() => {
      fetchUserData();
    }, [])
    

  return (
    <div>ManageUser</div>
  )
}

export default ManageUser;