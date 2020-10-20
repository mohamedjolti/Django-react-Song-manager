import { Add_Song, Delete_Song, Fetch_Songs } from "./types";


const Header={
    'Authorization': 'Token '+localStorage.getItem("token"), 

}

//get songs
export const getSongs=()=>(dispatch)=>{
    
    fetch("/api/songs/",{
        headers:new Headers(Header)

    }).then(res=>res.json()).then(data=>{
        console.log(data);
        dispatch({type:Fetch_Songs,payload:data})
    })
}

//delete song

export const deleteSong=(id)=>(dispatch)=>{
     console.log("delete song"+id);
    fetch(`/api/songs/${id}`, {
        method: 'Delete',
        headers:new Headers(Header)
    
    }).then(response =>{
        dispatch({type:Delete_Song,payload:id})
    })
    

}

//add song

export const AddSong=(form)=>(dispatch)=>{
    console.log("add song"+form.name);
    const formData = new FormData();
    formData.append("name",form.name)
    formData.append("owner",form.owner)
    formData.append("categorie",form.categorie)

   fetch("/api/songs/", {
       method: 'Post',
       headers:new Headers(Header),

       body:formData
   
   }).then(res =>res.json()).then(data=>{
       console.log(data);
       dispatch({type:Add_Song,payload:data})
   })
   

}