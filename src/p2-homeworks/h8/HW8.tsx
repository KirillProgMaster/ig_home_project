import React, {useState} from 'react'
import {checkAgeAC, homeWorkReducer, sortNameDownAC, sortNameUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h4/common/c2-SuperButton/SuperButton.module.css'
import t from './HW8.module.css'

export type UserType = {
    _id:number
    name:string
    age:number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name} {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortNameUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortNameDownAC()))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={t.buttons}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown} className={s.changeButton}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge} className={s.changeButton}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
