import { Login_User } from "./types";

export const login=(form)=>(dispatch)=>{
    console.log("add song"+name);
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

export function getUser(){

}
export function logout(){

}