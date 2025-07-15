import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import favsReducer from "./favoritesReducer";

export default combineReducers({
    movie: movieReducer,
    favorite: favsReducer,
});
