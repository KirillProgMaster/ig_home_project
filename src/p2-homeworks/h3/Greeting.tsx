import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'
import t from '../h4/./common/c1-SuperInputText/SuperInputText.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void  // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressButton: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,pressButton} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? t.errorInput : t.superInput // need to fix with (?:)
    const buttonClass = !name  ? s.button : s.butfocus
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={pressButton}/>

            <button disabled={!name} onClick={addUser} className={buttonClass}>add</button>
            <span>{totalUsers}</span>
            <div className={t.error}>
                <span>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
