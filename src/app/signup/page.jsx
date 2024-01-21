'use client';
import React from 'react';
// import './signup.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().min(4, 'Too Short!').required('Required')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one digit')
  .matches(/\W/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
  .required('confirm password is required')
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    },
    onSubmit: async (values, {resetForm}) => {
      console.log(values);

      // setTimeout(() => {
      //         resetForm();
      // }, 3000);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json'}
      });

      console.log(res.status);

      if(res.status === 200){
        enqueueSnackbar('Successfully Registered', {variant: 'success'});
      }else{
        enqueueSnackbar('Something went wrong', {variant: 'error'});
      }

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

                <button className='btn btn-primary mt-3'type='submit' disabled={signupForm.isSubmitting} >{ signupForm.isSubmitting ? 'Submitting...' : 'Submit'}</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup;