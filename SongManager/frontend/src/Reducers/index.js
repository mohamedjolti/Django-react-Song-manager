import SongReducer from "./SongReducer";
import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer";


export default combineReducers({
       songs: SongReducer,
       auth:AuthReducer
})
