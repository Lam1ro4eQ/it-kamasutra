import React, {useState} from "react";
import style from './SelectDymich.module.css'


export type  ItemType = {
    title: string
    value: number
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]


}

export function SelectDymich(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <div className={style.select}>
            <h3>{selectedItem && selectedItem.title}</h3>
            <div className={style.items}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>
        </div>
    )
}



