import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

 class Header extends Component {
   
    render() {
      const isauth=this.props.auth.isAuth
      const authLinks=(
        <div className="container-fluid">

        <ul className="nav navbar-nav navbar-right">
        <li> <Link to="/register">register</Link></li>  
        <li> <Link to="/login">Login</Link></li>  
      </ul>
      </div>
      );
     
      const isauthlinks=(
        <div className="container-fluid">

        <div className="navbar-header">
        <a className="navbar-brand" href="#">Song Manager</a>
      </div>
      
      <ul className="nav navbar-nav navbar-right">
        <li> <Link to="/logout">logout</Link></li>

        </ul>
      </div>
      
      )
        return (
            <div>
     <nav className="navbar navbar-inverse">
     {!isauth ? authLinks : isauthlinks}

 
</nav>
            </div>
        )
    }
}

const mapstatetoprops=(state)=>({
  auth:state.auth
})
export default connect(mapstatetoprops,null)(Header)