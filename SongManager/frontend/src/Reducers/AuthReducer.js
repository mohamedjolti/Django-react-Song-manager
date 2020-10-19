import { Get_User, Login_User, Register_User } from "../Actions/types"
import Login from "../components/Acounts/Login"
import store from "../store"

const initState={
    token:localStorage.getItem("token"),
    isAuth:false,
    user:null
}

export default function (state=initState,action){
    switch(action.type){
        case Register_User:
            return state
        case Login_User:
            localStorage.setItem("token",action.payload.token)
            return {
                ...state,
                isAuth:true
            }
        case Get_User:
            return {
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}