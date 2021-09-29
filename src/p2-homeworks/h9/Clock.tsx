import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h4/common/c2-SuperButton/SuperButton.module.css'
import t from './Clock.module.css'

function Clock() {
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

    const time = [date.getHours(), date.getMinutes(), date.getSeconds()]
    const dateInfo = [date.getDate(), date.getMonth() + 1, date.getFullYear()]

    const getCurrentData = (dateTime: Array<number>) => {
        return dateTime.map(value => value < 10 ? `${"0" + value}` : value).join(':')
    }

    return (
        <div>
            <div className={t.container}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {getCurrentData(time)}
                </div>

                {show && (
                    <div>
                        {getCurrentData(dateInfo)}
                    </div>
                )}

            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop} className={s.changeButton}>stop</SuperButton>

        </div>
    )
}

export default Clock
