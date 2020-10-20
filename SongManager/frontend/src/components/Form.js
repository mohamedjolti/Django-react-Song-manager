import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AddSong} from "../Actions/SongActions"
 class Form extends Component {

    constructor(props){
        super(props)

        this.state={
            name:"",
            categorie:"",
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
       const obj={
        name:this.state.name,
        categorie:this.state.categorie,
        owner:this.props.id
    }
    console.log(obj);
       this.props.AddSong(obj);
       this.setState({
           name:"",
           categorie:""
       })
   }

    render() {
        return (
            <div>
                <h3>Add new Song</h3>
              <form onSubmit={this.onsubmit}>
                
               <input className="form-control" placeholder="new Song" name="name" value={this.state.name} onChange={this.onchange}/>
               <input className="form-control" placeholder="categorie" name="categorie" value={this.state.categorie} onChange={this.onchange}/>

               <button className="btn btn-primary" type="submit">add new song</button>
              </form>
            </div>
        )
    }
}
const mapspropstosate=(state)=>({
    id:state.auth.user.id
})
export default connect(mapspropstosate,{AddSong},)(Form)