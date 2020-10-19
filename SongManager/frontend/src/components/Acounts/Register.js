import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Register extends Component {
    constructor(props){
    super(props)
    this.state={
        username:"",
        email:"",
        password:"",
        password_verify:""
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

    }
    render() {
        const {username,email,password_verify,password}=this.state
        return (
            <div>
                <h2>Register</h2>
                 <form>
                             <div className="form-group">
                                <label className="sr-only" for="email">Username:</label>
                                <input name="username" value={username} onChange={this.onchange.bind(this)} className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" for="email">Email address:</label>
                                <input name="email" value={email} onChange={this.onchange.bind(this)} className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" for="email">Email address:</label>
                                <input name="password" value={password} onChange={this.onchange.bind(this)} className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" for="pwd">Password:</label>
                                <input name="password_verify"  value={password_verify} onChange={this.onchange.bind(this)} className="form-control" id="pwd"/>
                            </div>
                            <button className="btn btn-success">Submit</button>
                         <Link className="btn btn-primary" to="/login">Or login here</Link>
                </form>
            </div>
        )
    }
}
