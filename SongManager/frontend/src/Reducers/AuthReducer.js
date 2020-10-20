import { Get_User, Login_User, Logout_User, Register_User } from "../Actions/types"
import Login from "../components/Acounts/Login"
import store from "../store"

const initState={
    token:localStorage.getItem("token"),
    isAuth:(localStorage.getItem("token")=="null")? false: true,
    user:{id:0,username:"",email:""}
}

export default function (state=initState,action){
    switch(action.type){
        case Register_User:
            return state
        case Login_User:
            localStorage.setItem("token",action.payload.token)

            return {...state,user:action.payload.user,isAuth:true}
        case Get_User:
            return {
                ...state,
                user:action.payload
            }
        case Logout_User:
            localStorage.setItem("token",null)
            return state
        default:
            return state
    }
}