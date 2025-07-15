import { useSelector } from "react-redux";


const initialState = {
    favorites: [],
    displayFavorites: true,
};


export const favsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}