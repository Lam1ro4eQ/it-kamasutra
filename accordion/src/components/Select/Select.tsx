import React, {useState} from "react";

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

    let findValue = props.items.find(i => i.value == props.parentValue) as SelectItemsType
    return (
        <div>
            <div onClick={()=>{setcollapsedValue(!collapsedValue)}}>{findValue.title}</div>
            {!collapsedValue && props.items.map(i => <div onClick={()=>{props.setParentValue(i.value)}}>{i.title}</div>)}
        </div>

    )
}



