import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from '../store'
import Dashboard from './Dashboard'
import Header from "./Header"
import {HashRouter as Router,Redirect,Switch,Route} from "react-router-dom"
import Register from './Acounts/Register'
import Login from './Acounts/Login'
import PrivateRoute from './Common/PrivateRoute'
import Logout from './Acounts/Logout'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                    <Router>
                 <Header/>
                <div className="container">
                    <Switch>
                      <PrivateRoute exact path="/" component={Dashboard}/>
                      <Route exact path="/register" component={Register}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/logout" component={Logout}/>


                      </Switch>

                </div>
                </Router>
            </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"))