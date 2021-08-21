import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";

export type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) =>  void
    deleteAffairCallback: (_id:number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}
    const buttonClass1 = `${s.priorityButton} ${props.filter ==='all'? s.buttonActive :''}`
    const buttonClass2 = `${s.priorityButton} ${props.filter ==='high'? s.buttonActive :''}`
    const buttonClass3 = `${s.priorityButton} ${props.filter ==='middle'? s.buttonActive :''}`
    const buttonClass4 = `${s.priorityButton} ${props.filter ==='low'? s.buttonActive :''}`

    return (
        <div>
        const
            {mappedAffairs}

            <button className={buttonClass1} onClick={setAll}>All</button>
            <button className={buttonClass2}onClick={setHigh}>High</button>
            <button className={buttonClass3} onClick={setMiddle}>Middle</button>
            <button className={buttonClass4} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
