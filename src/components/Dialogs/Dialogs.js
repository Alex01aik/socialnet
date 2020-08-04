import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from '../Message/Message';

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsItems.map(item => {
                    return(
                        <DialogItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                        />
                    )
                })}
            </div>
            <div className={style.messages}>
                {props.messages.map(message => {
                    return(
                        <Message
                            key={message.id}
                            message={message.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Dialogs;