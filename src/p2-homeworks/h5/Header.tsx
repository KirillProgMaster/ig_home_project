import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Pages.module.css'
function Header() {
    let[condition, setCondition] = useState<boolean>(true)
    const changeCondition = () =>{
        setCondition(!condition)
        // alert(condition)
    }
    return (
        <>
            <div>React homeworks: <button onClick={changeCondition}>{condition ?<span>Hide</span> : <span>Show</span>}</button></div>
            <div className={condition ? s.header : s.activeHeader}>
                <div className={s.headerItem}><NavLink to={'/pre-junior'}>Pre-junior</NavLink></div>
                <div className={s.headerItem}><NavLink to={'/junior'}>Junior</NavLink></div>
                <div className={s.headerItem}><NavLink to={'/junior+'}>Junior+</NavLink></div>
            </div>
        </>

    )
}

export default Header
