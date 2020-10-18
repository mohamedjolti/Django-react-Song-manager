import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from '../store'
import Dashboard from './Dashboard'
import Header from "./Header"
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>

                 <Header/>
                <div className="container">
                      <Dashboard/>

                </div>
            </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"))