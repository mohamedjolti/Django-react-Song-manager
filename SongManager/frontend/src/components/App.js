import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Dashboard from './Dashboard'
import Header from "./Header"
export default class App extends Component {
    render() {
        return (
            <div>

                 <Header/>
                 <Dashboard/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"))