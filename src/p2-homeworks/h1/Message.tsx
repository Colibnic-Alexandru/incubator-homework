import React from 'react'
import s from './Message.module.css';

export type MessagesPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: MessagesPropsType) {
    return (
        <div>
            <div className={s.item}>
                <div className={s.avatar}><img alt={'ava'} src={props.avatar}/></div>
                <div className={s.container}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message