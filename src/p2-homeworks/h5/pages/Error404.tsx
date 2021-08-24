import React from 'react'
import s from '../Pages.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";
function Error404() {
    return (
        <div className={s.errorPage}>
            <div className={s.errorTitle}>
                <h1>4<span className={s.errorImg}></span>4</h1>
            </div>
            <div className={s.errorSign}>OOPS! PAGE NOT BE FOUND</div>
            <div><p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable</p></div>
            <div><NavLink to={PATH.PRE_JUNIOR} className={s.errorButton}>Back to homepage</NavLink></div>
        </div>
    )
}

export default Error404
