import dialogMessageCss from './DialogMessage.module.css';
import React from "react";

const DialogMessage = (props) => {
    return <div className={dialogMessageCss.message}>
        {props.message}
    </div>
};
export default DialogMessage;