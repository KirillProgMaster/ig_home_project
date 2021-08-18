import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) =>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
        let newValue = e.currentTarget.value.trim()
        if(newValue){
            setName(newValue)
            setError('')
            // setName('')
        } else {
            setError('Введите имя!')
            setName('')
        }
    }
    const addUser = () => {
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
            setName('')
        }
    const pressButton = (e:KeyboardEvent<HTMLInputElement>) => {
        // debugger
       if(e.key === 'Enter' && name) {
           addUserCallback(name)
           alert(`Hello  ${name}!`) // need to fix
           setName('')
       }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressButton={pressButton}
        />
    )
}

export default GreetingContainer
