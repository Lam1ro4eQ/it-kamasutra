import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    title: 'Example/Input',

    argTypes: {
        backgroundColor: {control: 'color'},
    },
};
export const UncontrolledInput = () => <input value={'it-incubator.ru'}/>
export const UncontrolledInputWithTrackingValue = () => {
    let [value, setValue] = useState("")
    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }}/> - {value}</>
}

export const UncontrolledInputWithTrackingValueByButtonPress = () => {
    let [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
    <button onClick={save}>save</button> - {value}</>
}



// export const ControlledInputWithFixedValue = () => <input value={'it-incubator.ru'}/>




