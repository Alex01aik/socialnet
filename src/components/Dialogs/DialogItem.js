import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <NavLink
            to={path}
            className={style.dialog}
            activeClassName={style.active}>
            {props.name}
        </NavLink>
    )
}

export default DialogItem;