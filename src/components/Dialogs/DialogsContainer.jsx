import React from 'react';

import {addMessageActionCreator, updateMessageTextActionCreator,} from "../../redux/Message_reducer";
import Dialogs from "./Dialogs";
import TestContext from "../../redux/StoreContext";

const DialogsContainer = () => {

    return (
        <TestContext.Consumer>{
                (store) => {
                    let state = store.getState().messagePage;
                    let updateText = (text) => {
                        let action = updateMessageTextActionCreator(text);
                        store.dispatch(action);
                    }

                    let addMessage = () => {
                        let action = addMessageActionCreator();
                        store.dispatch(action);
                    }
                    return <Dialogs
                        dialogsData={state}
                        addMessage={addMessage}
                        updateText={updateText}/>
                }}

        </TestContext.Consumer>
    )

}
export default DialogsContainer;
