import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)}
            state={state} />


        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
