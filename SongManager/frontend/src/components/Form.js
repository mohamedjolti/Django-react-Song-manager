import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AddSong} from "../Actions/SongActions"
 class Form extends Component {

    constructor(props){
        super(props)

        this.state={
            name:""
       }  

        this.onchange=this.onchange.bind(this)
        this.onsubmit=this.onsubmit.bind(this)
    }



   onchange(event){
       event.preventDefault();
       this.setState({
           [event.target.name]:event.target.value
       })
   }
   onsubmit(e){
       e.preventDefault();
       console.log(this.state.name);
       this.props.AddSong(this.state.name);
       this.state.name=""
   }

    render() {
        return (
            <div>
              <form onSubmit={this.onsubmit}>
                
               <input name="name" value={this.state.name} onChange={this.onchange}/>
               <button type="submit">add new song</button>
              </form>
            </div>
        )
    }
}

export default connect(null,{AddSong},)(Form)