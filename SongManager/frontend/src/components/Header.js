import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
     <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Songs</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Songs Management</a></li>

    </ul>
  </div>
</nav>
            </div>
        )
    }
}
