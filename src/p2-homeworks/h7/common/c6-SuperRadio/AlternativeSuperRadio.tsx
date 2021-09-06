
import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const AlternativeSuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <FormControl component={"fieldset"}>
            <RadioGroup name={name} value={value} onChange={onChangeCallback} >
                <FormControlLabel value={o} control={<Radio />} label={o}
                                  key={name + '-' + i} checked={o === value}/>
            </RadioGroup>
        </FormControl>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default AlternativeSuperRadio