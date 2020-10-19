import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import { login } from '../../Actions/UserActions'

 class Login extends Component {
    constructor(props){
        super(props)
    this.state={
            username:"",
            password:"",
        }
    }
  
    onchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onsubmit(e){
        e.preventDefault();
        console.log(this.state.username);
        this.props.login({
               username:this.state.username,
               password:this.state.password
        })

    }
    render() {
        const {username,password}=this.state
        return (
            <div>
                <h2>Login</h2>
                 <form onSubmit={this.onsubmit.bind(this)}>
                             <div className="form-group">
                                <label className="sr-only" for="email">Username:</label>
                                <input name="username" value={username} onChange={this.onchange.bind(this)} className="form-control" id="email"/>
                            </div>

                            <div className="form-group">
                                <label className="sr-only" for="email">Email address:</label>
                                <input name="password" value={password} onChange={this.onchange.bind(this)} className="form-control" id="email"/>
                            </div>
                          
                            <button className="btn btn-success" type="submit">Submit</button>
                              <Link className="btn btn-primary" to="/register">Or Register here</Link>
                </form>
            </div>
        )
    }
}

export default connect(null,{login},)(Login)