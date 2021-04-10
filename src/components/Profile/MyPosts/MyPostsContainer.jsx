import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState().profilePage;
//
//
//     let addPost = () => {
//         let action = addPostActionCreator();
//         props.store.dispatch(action)
//
//
//     };
//     let changeTextarea = (text) => {
//         let action = updateTextActionCreator(text);
//         props.store.dispatch(action);
//     };
//
//     return <MyPosts addPost={addPost} changeTextarea={changeTextarea} myPosts={state}/>
//
// }
const mapStateToProps = (state) =>{
    return{
        myPosts :state.profilePage,
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        addPost: ()=>{
            let action = addPostActionCreator();
            dispatch(action)
        },
        changeTextarea: (text) =>{
            let action = updateTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
