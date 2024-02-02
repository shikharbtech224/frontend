'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Navbar = () => {

  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const logout = () => {
    sessionStorage.removeItem('user');
    setCurrentUser(null);
    router.push('/login');
  }

  const showUserOptions = () => {
    if(currentUser !== null){
      return <li className="nav-item">
       <button className="btn btn-danger" onClick={logout}>Logout</button>
       </li>

    }else{
      return <> <li className="nav-item">
      <Link className="nav-link" href="/login">
        Login
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" href="/signup">
        Signup
      </Link>
    </li>
    </>

    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      My REACT
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" href="/eventhandling">
            Event Handling
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" href="/todo">
          To Do
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/statemanagement">
            State Management
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/mypost">
            My Post
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/chat">
            Chat
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/manageuser">
            Manage User
          </Link>
        </li>

        {showUserOptions()}

      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar;