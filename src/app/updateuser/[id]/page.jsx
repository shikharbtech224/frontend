'use client';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const UpdateUser = () => {

  const {id} = useParams();
  const [userData, setUserData] = useState(null); 
  const router = useRouter();

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getbyid/'+id);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  },  []);

  const formSubmit = async (values) => {
    console.log(values);

    const res = await fetch('http://localhost:5000/user/update/'+id,{
      method: 'PUT',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(res.status);

    if(res.status === 200){
      enqueueSnackbar('User Updated Successfully', {variant: 'success'});
      router.push('/manageUser');
    }else{
      enqueueSnackbar('SOmething went wrong', {variant: 'error'});
    }

  };

  return (
    <div>
      <h1>Update User</h1>

      {
        userData!==null ? (
          <Formik initialValues={userData} onSubmit={formSubmit} >
            {
              (updateform) => {
               return <form onSubmit={updateform.handleSubmit}>
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control mb-3" id="name" onChange={updateform.handleChange} value={updateform.values.name} />
                  <label htmlFor="">Email Address</label>
                  <input type="text" className="form-control mb-3" id="email" onChange={updateform.handleChange} value={updateform.values.email} />
                  <label htmlFor="">Password</label>
                  <input type="password" className="form-control mb-3" id="password" onChange={updateform.handleChange} value={updateform.values.password} />

                  <button className='btn btn-primary mt-4' type='submit'>Submit</button>
                </form>
              }
            }
          </Formik>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </div>
  )
}

export default UpdateUser;