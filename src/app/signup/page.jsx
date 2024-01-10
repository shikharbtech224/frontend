import React from 'react'
import './signup.css';

const Signup = () => {
  return (
    <>
  <header>
    <h1 className="top">
      {" "}
      <i className="img-align fa-solid fa-computer" /> <i>Techyy.com</i>{" "}
    </h1>
    <div className="search-bar">
      <input type="search" placeholder=" Search for a gadget..." />
      <button className="btn btn-primary me-5">Search</button>
      <a href="">
        <button className="ms-5 btn btn-secondary">Become a seller</button>
      </a>
      <a href="">
        <button className="btn btn-secondary">24x7 Customer Support</button>
      </a>
      <a href="">
        <button className="btn btn-secondary">About Us</button>
      </a>
    </div>
  </header>
  <div className="card">
    <div className="sub-header">
      <h2>Sign up</h2>
      <h5>
        Already have an account?{" "}
        <button>
          <a href="login-techyy.com.html">Login</a>
        </button>
      </h5>
    </div>
    <form className="ms-3 me-3">
      <label htmlFor="firstname">
        <b>First name</b>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter firstname"
      />{" "}
      <br />
      <label htmlFor="lastname">
        <b>Last name</b>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter lastname"
      />{" "}
      <br />
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input type="email" className="form-control" placeholder="Enter Email" />{" "}
      <br />
      <label htmlFor="Mobile No.">
        <b>Mobile No.</b>
      </label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Contact number"
      />{" "}
      <br />
      <label htmlFor="City">
        <b>City</b>
      </label>
      <input type="text" className="form-control" placeholder="Enter city" />{" "}
      <br />
      <label htmlFor="pincode">
        <b>Pin code</b>
      </label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Pin Code"
      />
      <button className="btn signup btn-primary w-100 mt-4">
        Create account
      </button>
    </form>
  </div>
  <footer>
    <div className="foot">
      <button className="me-5">Become a seller</button>
      <button className="me-5">Advertise</button>
      <button className="me-5">Gift Cards</button>
      <button className="me-5">Help Center</button>
      ©2023-2024 Techhy.com
    </div>
  </footer>
</>

  )
}

export default Signup