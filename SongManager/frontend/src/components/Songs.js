import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSongs,deleteSong} from "../Actions/SongActions"
 class Songs extends Component {

    componentWillMount(){
        this.props.getSongs();
    }
    render() {
        const songs=this.props.songs.map(song=>
            (
                <div key={song.id}>
                    
                    {song.name}

                    <button onClick={()=>this.props.deleteSong(song.id)}>Delete</button>
                </div>
            )
        )
                return (
            <div>
                <h1>Songs</h1>
                {songs}
            </div>
        )
    }
}

const mappropstostate=state=>({
     songs:state.songs.items
})

export default connect(mappropstostate,{getSongs,deleteSong},)(Songs)