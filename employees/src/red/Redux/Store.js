import { legacy_createStore } from "redux";
import { reducer as Reducer } from "./Reducer";

const store = legacy_createStore(Reducer);

export{store};