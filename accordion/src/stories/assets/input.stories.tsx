import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
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
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value}</>
}

export const UncontrolledInputWithTrackingValueByButtonPress = () => {
    let [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" onChange={onChange} checked={parentValue}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={1}>Kiev</option>
        <option value={2}>Moskow</option>
        <option value={3}>Minsk</option>
    </select>
}


// export const ControlledInputWithFixedValue = () => <input value={'it-incubator.ru'}/>




