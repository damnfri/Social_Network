import dialogItemCss from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return <div className={dialogItemCss.dialog}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={dialogItemCss.activeLink}>{props.name}</NavLink>
    </div>
}
export default DialogItem;