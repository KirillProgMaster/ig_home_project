import React from 'react'
import s from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}
export const Message = (props:MessageType) => {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <div className={s.triangle}></div>
            <div className={s.textblock}>
                <div className={s.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}


