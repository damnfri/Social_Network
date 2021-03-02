import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {addPost, addText} from "./redux/state";


export let rerenderEntireTree = (state,addPost,addText) => {
    ReactDOM.render(
        <BrowserRouter>

            <App state={state}
                 addPost={addPost}
                 addText={addText}
                 />


        </BrowserRouter>, document.getElementById('root')

    );
};
