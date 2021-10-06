import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number) => void
    onDoubleChangeRange?: (value: number) => void
    // onChangeDoubleRange?: (value: [number, number]) => void
    value?: [number, number]
    max:number
    min:number
    // min, max, step, disable, ...
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,min,onDoubleChangeRange,max
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }
    const onDoubleChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange && onChange(e) // сохраняем старую функциональность

        onDoubleChangeRange && onDoubleChangeRange(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }
    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                value={min}
                // className={finalRangeClassName}

                /*{...restProps} */
            />
            <input
                type={'range'}
                onChange={onDoubleChangeCallback}
                value={max}
                // onChange={onChangeCallback}
                // className={finalRangeClassName}

                /*{...restProps} */
            />
        </>
    )
}
