import {combineReducers, createStore,} from 'redux';
import messageReducer from "./Message_reducer";
import profileReducer from "./Profile_reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
});

let store = createStore(reducers);

export default store;

