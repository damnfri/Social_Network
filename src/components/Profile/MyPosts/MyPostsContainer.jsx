import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;


    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action)


    };
    let changeTextarea = (text) => {
        let action = updateTextActionCreator(text);
        props.store.dispatch(action);
    };

    return <MyPosts addPost={addPost} changeTextarea={changeTextarea} myPosts={state}/>

}
export default MyPostsContainer;
