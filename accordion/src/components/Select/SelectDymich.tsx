import React, {useState, KeyboardEvent} from "react";
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
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    let hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if(hoveredElementValue === i) {
                setHoveredElementValue(hoveredElementValue+1)
            } if (hoveredElementValue === props.items.length - 1) {
                setHoveredElementValue(0)
            }
        }
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                setHoveredElementValue(props.items[i+1].value)
            }
        }
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    return (
        <div className={style.select + ''} onKeyUp={onKeyUp} tabIndex={0}>
            <h3 className={style.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
            {
                active &&
                <div className={style.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                        className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                        onClick={() => {
                            onItemClick(i.value)
                        }} key={i.value}>{i.title}</div>)}
                </div>
            }
        </div>
    )
}



