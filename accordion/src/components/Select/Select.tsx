import React, {useState} from "react";
import s from './Select.module.css'




export type  SelectItemsType = {
    title: string
    value: number
}
export type SelectPropsType = {
    parentValue: number
    setParentValue: (parentValue: number)=> void
    items: SelectItemsType[]
    titleValue: string

}

export function Select(props: SelectPropsType) {

    let [collapsedValue, setcollapsedValue] = useState(true)

    console.log({props})
    const setNewValue = (value: number)=>{
        props.setParentValue(value)
        setcollapsedValue(true)
    }

    const toggleDropdown = () => setcollapsedValue(!collapsedValue)

    let findValue = props.items.find(i => i.value == props.parentValue) as SelectItemsType
    return (
        <div >
            <h3>{props.titleValue}</h3>

            <div  onClick={toggleDropdown}>{findValue?.title}</div>
            {!collapsedValue && props.items.map(i => <div onClick={() => setNewValue(i.value)}>{i.title}</div>)}
        </div>
    )
}



