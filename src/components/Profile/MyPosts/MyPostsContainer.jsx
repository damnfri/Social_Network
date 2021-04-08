import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import TestContext from "../../../redux/StoreContext";

const MyPostsContainer = () => {

    return (
        <TestContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage

                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action)

                }
                let changeTextarea = (text) => {
                    let action = updateTextActionCreator(text);
                    store.dispatch(action);
                }
                return (<MyPosts
                    addPost={addPost}
                    changeTextarea={changeTextarea}
                    myPosts={state}/>)
            }
        }
        </TestContext.Consumer>
    )

}
export default MyPostsContainer;
