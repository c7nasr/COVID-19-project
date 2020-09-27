import { combineReducers } from "redux";
import alert from './alert';
import app from './app';
import getData from './getData';
export default combineReducers({
   alert,
   app,
   getData
})