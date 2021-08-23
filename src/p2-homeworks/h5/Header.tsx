import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Pages.module.css'
function Header() {
    let[condition, setCondition] = useState<boolean>(false)
    const changeCondition = () =>{
        setCondition(!condition)
        // alert(condition)
    }
    return (
        <>
            <div>React homeworks: <button onClick={changeCondition}>{condition ?<span>Hide</span> : <span>Show</span>}</button></div>
            <div className={s.header}>
                <ul className={condition ? s.activeHeader : s.nonActiveHeader}>
                    <li className={s.headerItem}><NavLink to={'/pre-junior'}>Pre-junior</NavLink></li>
                    <li className={s.headerItem}><NavLink to={'/junior'}>Junior</NavLink></li>
                    <li className={s.headerItem}><NavLink to={'/junior+'}>Junior+</NavLink></li>
                </ul>
                {/*<button onClick={changeCondition}>{condition ?<span>Hide</span> : <span>Show</span>}</button>*/}
            </div>
        </>

    )
}

export default Header
