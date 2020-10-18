import SongReducer from "./SongReducer";
import { combineReducers } from "redux"


export default combineReducers({
       songs: SongReducer
})
