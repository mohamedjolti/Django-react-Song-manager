import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../Actions/UserActions'
import Form from './form'
import Songs from './Songs'

 class Dashboard extends Component {
     componentDidMount(){
           this.props.getUser();
     }
     render(){
    return (
        <div>
            <Form/>
            <Songs/>
        </div>
    )
}
 }
export default connect(null,{getUser},)(Dashboard)
