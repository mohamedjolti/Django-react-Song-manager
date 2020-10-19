import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSongs,deleteSong} from "../Actions/SongActions"
 class Songs extends Component {

    componentWillMount(){
     //   this.props.getSongs();
    }
    render() {
        const songs=this.props.songs.map(song=>
            (
                <tr key={song.id}>
                    <td>{song.id}</td>
                 <td> {song.name} </td>   

                   <td> <button className="btn btn-danger" onClick={()=>this.props.deleteSong(song.id)}>Delete</button> </td>
                </tr>
            )
        )
                return (
            <div>
              <table className="table table-condensed">
    <thead>
      <tr>
        <th>Song id</th>
        <th>Song name</th>
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
     {songs}

    </tbody>
  </table>
            </div>
        )
    }
}

const mappropstostate=state=>({
     songs:state.songs.items
})

export default connect(mappropstostate,{getSongs,deleteSong},)(Songs)