import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, InitialStateType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const {theme} = useSelector<AppStoreType, InitialStateType>(state=>state.theme)

    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback =(title:string)=> {
        dispatch(changeThemeC(title))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
