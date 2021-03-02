import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from './DialogMessage/DialogMessage'

const Dialogs = (props) => {
    let dialogsDataJSX = props.dialogsData.map(dialog => <DialogItem id={dialog.id}
                                                                     name={dialog.name}/>);
    let dialogsDataMessageJSX = props.dialogsData.map(message => <DialogMessage message={message.message}/>);

    return (
        <div className={dialogsCss.dialogs}>

            <div className={dialogsCss.dialogItems}>
                <p>Dialogs</p>
                {dialogsDataJSX}
            </div>

            <div className={dialogsCss.messages}>
                <p>Messages</p>
                {dialogsDataMessageJSX}
            </div>

        </div>
    )
}
export default Dialogs;
