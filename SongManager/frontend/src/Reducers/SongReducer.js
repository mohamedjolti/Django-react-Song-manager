import { Add_Song, Delete_Song, Fetch_Songs } from "../Actions/types"
import store from "../store"


const initState={
    items:[],
    item:{}
}


export default  function(state=initState ,action){
    switch(action.type){
        case Fetch_Songs:
            return {...state,items:action.payload}
        case Delete_Song:
            return {
                ...state,
                items:state.items.filter(item=>item.id!==action.payload)
            }
        case Add_Song:
            return {
                ...state,
                items:[...state.items,action.payload]
            }
        default :
        return state
    }
}