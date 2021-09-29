import React, {useState} from 'react'
import t from "./Clock.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "../h4/common/c2-SuperButton/SuperButton.module.css";
import moment from "moment";

function AlternativeClock() {

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringDate = moment().format('DD:MM:YYYY')
    const stringTime = moment().format('HH:mm:ss')

    return (
        <div>
            <div className={t.container}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}

            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop} className={s.changeButton}>stop</SuperButton>

        </div>
    )
}

export default AlternativeClock
