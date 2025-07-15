import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers/movieReducer"

const reducer = (state, action) => {
    return state;
}

export const myStore = createStore(reducer);
