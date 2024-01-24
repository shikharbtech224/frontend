'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const[userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data = await res.json();
        setUserList(data);
        console.table(data);
    }

    useEffect(() => {
      fetchUserData();
    }, []);

    const deleteUser = async (id) => {
      const res = await fetch('http://localhost:5000/user/delete/'+id, {method: 'DELETE'});
      if (res.status === 200) {
        fetchUserData();
        enqueueSnackbar('User Deleted Successfully', {variant: 'success'});
      }else{
        enqueueSnackbar('Something went wrong', {variant: 'error'});
      }
    }

    const displayUsers = () => {
      return <table className='table table-dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map( (user) => {
              return <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className='btn btn-primary'>Edit</button>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={ () => { deleteUser(user._id)}}>Delete</button>
                </td>
              </tr>
            })
    }
        </tbody>
      </table>
    }    

  return (
    <div>
      <div className='container'>
      {displayUsers()}
      </div>
    </div>
  )
}

export default ManageUser;