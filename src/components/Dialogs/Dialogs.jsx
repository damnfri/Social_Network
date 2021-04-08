import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from './DialogMessage/DialogMessage'
import TestContext from "../../redux/StoreContext";

const Dialogs = (props) => {

    let dialogsDataJSX = props.dialogsData.dialogsData.map(dialog => <DialogItem id={dialog.id}
                                                                                 name={dialog.name}/>);
    let dialogsDataMessageJSX = props.dialogsData.messages.map(message => <DialogMessage message={message.message}/>);

    let updateTextRef = React.createRef();

    let updateText = () => {
        let text = updateTextRef.current.value;
        props.updateText(text)

    }
    let addMessage = () => {
        if (updateTextRef.current.value === '') return;
        props.addMessage();
    }


    return (
        <div className={dialogsCss.dialogs}>

            <div className={dialogsCss.dialogItems}>
                <p>Dialogs</p>
                {dialogsDataJSX}
            </div>

            <div className={dialogsCss.messages}>
                <p>Messages</p>
                {dialogsDataMessageJSX}
                <div>
                    <textarea onChange={updateText}
                              value={props.dialogsData.currentTextarea}
                              ref={updateTextRef}
                              placeholder="Write your message"
                              onDoubleClick={addMessage}/>
                    <button onClick={addMessage}>Send a message</button>
                    <TestContext.Consumer>
                        {value=> <p>{value}</p> }
                    </TestContext.Consumer>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;
