import { legacy_createStore as createStore } from "redux";
import CakeReducer from "./Cakes/CakeReducer"; 

const store = createStore(CakeReducer);

export default store;