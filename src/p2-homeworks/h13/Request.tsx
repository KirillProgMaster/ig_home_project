import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from "./RequestAPI";

export const Request = () => {

    const [value, setValue] = useState<boolean>(false)
    const [text, setText]=useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.checked)
    }
    async function sendStatusRequest(){
        try{
            const res = await RequestAPI.setSuccessStatus(value)
            setText(res.data.errorText)
        } catch (error){
            console.log( {...error} )
            setText(error.response.data.errorText)
        }
    }

    return (
        <div>
            <input type="checkbox" onChange={onChangeHandler}/>
            <button onClick={sendStatusRequest}>Click</button>
            <div>{text}</div>
        </div>
    );
};

