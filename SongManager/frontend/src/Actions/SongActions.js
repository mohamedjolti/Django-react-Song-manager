import { Add_Song, Delete_Song, Fetch_Songs } from "./types";





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

//add song

export const AddSong=(name)=>(dispatch)=>{
    console.log("add song"+name);
    const formData = new FormData();
    formData.append("name",name)
   fetch("/api/songs/", {
       method: 'Post',

       body:formData
   
   }).then(res =>res.json()).then(data=>{
       dispatch({type:Add_Song,payload:data})
   })
   

}