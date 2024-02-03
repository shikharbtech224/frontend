'use client';
import React from 'react';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import useAppContext from '../AppContext';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().min(4, 'Too Short!').required('Required')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one digit')
  .matches(/\W/, 'Password must contain at least one special character'),
});

const Login = () => {

  const router = useRouter();

  const { setLoggedIn } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email : '',
      password : '',
    },
    onSubmit: async (values, {resetForm}) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {'Content-Type': 'application/json'}
      });

      console.log(res.status);

      if(res.status === 200){
        enqueueSnackbar('Successfully Logged In', {variant: 'success'});
        
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
        router.push('/chat');

      }else if(res.status === 401){
        enqueueSnackbar('Invalid Credentials', {variant: 'error'});
      }else{
        enqueueSnackbar('Something went wrong', {variant: 'error'});
      }

    },
    validationSchema: LoginSchema
  });

  return (
    <div className='bg-body-secondary'>
        <div className="col-md-4 mx-auto d-flex vh-100 align-items-center">
          <div className="card imgbg w-100">
            <div className="card-body">
              <h3 className="my-5 text-center">Login Form</h3>
              <form onSubmit={loginForm.handleSubmit }>

                <label> <h3>Email</h3></label>
                <span className='text-danger ms-3'>{loginForm.errors.email}</span>
                <input type="email" className='form-control mb-4' id="email" onChange={loginForm.handleChange} value={loginForm.values.email} />

                <label><h3>Password</h3></label>
                <span className='text-danger ms-3'>{loginForm.errors.password}</span>
                <input type="password" className='form-control mb-4' id="password" onChange={loginForm.handleChange} value={loginForm.values.password} />

                <button className='btn btn-primary mt-3'type='submit' disabled={loginForm.isSubmitting} >{ loginForm.isSubmitting ? 'Logging...' : 'Login'}</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login;