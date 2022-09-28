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
    const [active, setActive] = useState(false)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    return (
        <div className={style.select + ''}>
            <h3 className={style.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
            {
                active &&
                <div className={style.items}>
                    {props.items.map(i => <div className={style.item + " " + (selectedItem === i ? style.selected : "")}
                                               onClick={() => {
                                                   onItemClick(i.value)
                                               }} key={i.value}>{i.title}</div>)}
                </div>
            }
        </div>
    )
}



