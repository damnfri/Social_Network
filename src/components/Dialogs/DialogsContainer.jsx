import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from './DialogMessage/DialogMessage'
import {addMessageActionCreator, updateMessageTextActionCreator,} from "../../redux/Message_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage;


    let updateText = (text) => {
        let action = updateMessageTextActionCreator(text);
        props.store.dispatch(action);

    }
    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }
    return <Dialogs dialogsData={state} addMessage={addMessage} updateText={updateText}/>

}
export default DialogsContainer;
