import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator,} from "../../redux/Message_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState().messagePage;
//
//
//     let updateText = (text) => {
//         let action = updateMessageTextActionCreator(text);
//         props.store.dispatch(action);
//
//     }
//     let addMessage = () => {
//         let action = addMessageActionCreator();
//         props.store.dispatch(action);
//     }
//     return <Dialogs dialogsData={state} addMessage={addMessage} updateText={updateText}/>
//
// }
const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateText: (text) => {
            let action = updateMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;
