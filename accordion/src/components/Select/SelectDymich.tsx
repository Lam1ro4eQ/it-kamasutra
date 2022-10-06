import React, {useState, KeyboardEvent, useEffect} from "react";
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
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        // setHoveredElementValue(props.items[i].value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Escape" || e.key === "Enter") {
            setActive(false)
        }
        // if (props.items[i].value === hoveredElementValue) {
        //     if (props.items[i + 1]) {
        //         props.onChange(props.items[i + 1].value)
        //         setHoveredElementValue(props.items[i + 1].value)
        //     } else {
        //         props.onChange(props.items[0].value)
        //         setHoveredElementValue(props.items[0].value)
        //     }
        // }
        // if (e.key === "ArrowUp") {
        //     if (props.items[i].value === hoveredElementValue) {
        //         if (props.items[i - 1]) {
        //             props.onChange(props.items[i - 1].value)
        //             setHoveredElementValue(props.items[i - 1].value)
        //         } else {
        //             props.onChange(props.items.length)
        //             setHoveredElementValue(props.items.length)
        //         }
        //     }
        // else {
        //     props.onChange(props.items[0].value)
        //     setHoveredElementValue(props.items[0].value)
        // }
        // }


        // for (let i = 0; i < props.items.length; i++) {
        //     if (props.items[i].value === hoveredElementValue) {
        //         setHoveredElementValue(props.items[i+1].value)
        //     }
        // }
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



