import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Pages.module.css'
function Header() {
    return (
        <div className={s.header}>
            <div className={s.headerItem}><NavLink to={'/pre-junior'}>Pre-junior</NavLink></div>
            <div className={s.headerItem}><NavLink to={'/junior'}>Junior</NavLink></div>
            <div className={s.headerItem}><NavLink to={'/junior+'}>Junior+</NavLink></div>
        </div>
    )
}

export default Header
