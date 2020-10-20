import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../Actions/UserActions'

 class Logout extends Component {
    componentDidMount(){
        console.log("logout component");
      this.props.logout();
    }
    render() {
        return (
             <Redirect to="/login"/>
        )
    }
}

export default connect(null,{logout},)(Logout)
