import { Redirect } from "react-router-dom";
import { Get_User, Login_User, Logout_User } from "./types";
const Header={
    'Authorization': 'Token '+localStorage.getItem("token"), 

  
}
export const login=(form)=>(dispatch)=>{

    const formData = new FormData();
    formData.append("username",form.username)
    formData.append("password",form.password)
    formData.append("name",name)
   fetch("/api/auth/login", {
       method: 'Post',

       body:formData
   
   }).then(res =>res.json()).then(data=>{
       console.log(data);
       dispatch({type:Login_User,payload:data})
   })
}

export function register(){
       
}

export const getUser=()=>(dispatch)=>{
    console.log("get User action");
    fetch("/api/auth/user", {
       
 
        headers:new Headers(Header)
    
    }).then(res =>res.json()).then(data=>{
       
        dispatch({type:Get_User,payload:data})
    })
 }

export const logout=()=>(dispatch)=>{
    fetch("/api/auth/logout", {
       
         method:"POST",
        headers:new Headers(Header)
    
    }).then(res =>{
       
        dispatch({type:Logout_User,payload:null})
    })
 }
