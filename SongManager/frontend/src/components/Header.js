import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
     <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Song Manager</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li> <Link to="/register">register</Link></li>  
      <li> <Link to="/login">Login</Link></li>  
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
