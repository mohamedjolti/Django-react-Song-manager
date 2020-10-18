import { Delete_Song, Fetch_Songs } from "./types";





//get songs
export const getSongs=()=>(dispatch)=>{
    
    fetch("/api/songs/").then(res=>res.json()).then(data=>{
        console.log(data);
        dispatch({type:Fetch_Songs,payload:data})
    })
}

//delete song

export const deleteSong=(id)=>(dispatch)=>{
     console.log("delete song"+id);
    fetch(`/api/songs/${id}`, {
        method: 'Delete',
    
    }).then(response =>{
        dispatch({type:Delete_Song,payload:id})
    })
    

}