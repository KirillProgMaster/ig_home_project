import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Pages.module.css'
import {PATH} from "./Routes";
function Header() {
    let[condition, setCondition] = useState<boolean>(false)
    const changeCondition = () =>{
        setCondition(!condition)
    }
    return (
        <>
            <div>React homeworks:</div>
            {/*<div>React homeworks: <button onClick={changeCondition}>{condition ?<span>Hide</span> : <span>Show</span>}</button></div>*/}
            <div className={s.header}>
                <ul className={condition ? s.activeHeader : s.nonActiveHeader}>
                    <li><NavLink to={PATH.PRE_JUNIOR} className={s.defaultLink} activeClassName={s.activeLink}>Pre-junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR} className={s.defaultLink} activeClassName={s.activeLink}>Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS} className={s.defaultLink} activeClassName={s.activeLink}>Junior+</NavLink></li>
                    {/*<li><NavLink to={'/Error'} className={s.defaultLink} activeClassName={s.activeLink}>Check Error</NavLink></li>*/}
                    <div onMouseEnter={changeCondition} className={condition ? s.arrow : s.arrowRotate}></div>
                </ul>
            </div>
        </>

    )
}

export default Header
