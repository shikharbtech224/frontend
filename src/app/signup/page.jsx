'use client';
import React from 'react';
// import './signup.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().min(4, 'Too Short!').required('Required')
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    },
    validationSchema: SignupSchema
  });

  return (
    <div className='bg-body-secondary'>
        <div className="col-md-4 mx-auto d-flex vh-100 align-items-center">
          <div className="card w-100">
            <div className="card-body">
              <h3 className="my-5 text-center">Signup Form</h3>
              <form onSubmit={signupForm.handleSubmit }>
                <label>Name</label>
                <span className='text-danger ms-3'>{signupForm.errors.name}</span>
                <input type="text" className='form-control mb-4' id="name" onChange={signupForm.handleChange} value={signupForm.values.name} />

                <label>Email</label>
                <span className='text-danger ms-3'>{signupForm.errors.email}</span>
                <input type="email" className='form-control mb-4' id="email" onChange={signupForm.handleChange} value={signupForm.values.email} />

                <label>Password</label>
                <span className='text-danger ms-3'>{signupForm.errors.password}</span>
                <input type="password" className='form-control mb-4' id="password" onChange={signupForm.handleChange} value={signupForm.values.password} />

                <label>Confirm Password</label>
                <span className='text-danger ms-3'>{signupForm.errors.confirmPassword}</span>
                <input type="password" className='form-control mb-4' id="confirmPassword" onChange={signupForm.handleChange} value={signupForm.values.confirmPassword}/>

                <button className='btn btn-primary mt-3'type='submit'>Signup</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup;