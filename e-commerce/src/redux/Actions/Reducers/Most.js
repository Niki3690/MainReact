import { combineReducers } from "redux";
import { cartreducer } from "./Reducer";

let rootred = combineReducers({
  cartreducer,
});

export default rootred;
