import React from 'react';
import './index.css';
import store from './redux/redux_store';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import TestContext from "./redux/StoreContext";


let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
                <App store={store}/>

            </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(store);



store.subscribe(() => {
    //let state = store.getState();
    rerenderEntireTree(store);
});
