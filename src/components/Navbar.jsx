import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          Lets React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="basicDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Basic
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/todo_list">Todo List</Link></li>
                <li><Link className="dropdown-item" to="/blog_app">Blog App</Link></li>
                <li><Link className="dropdown-item" to="/expense_tracker">Expense Tracker</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="intermediateDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Intermediate
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/find_job">Find Job</Link></li>
                <li><Link className="dropdown-item" to="/weather_app">Weather App</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="advancedDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Advanced
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/ecommerce">E-commerce Site</Link></li>
                <li><Link className="dropdown-item" to="/social_media">Social Media App</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )

}

export default Navbar