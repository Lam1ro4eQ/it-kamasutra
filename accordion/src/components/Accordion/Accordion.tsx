import React from "react";


export type  AccordionItemsType = {
    title:string
    value:number
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    items: Array<AccordionItemsType>
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: Array<AccordionItemsType>
}

function AccordionBody(props:AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i,index) => <li key={index}>{i.title}</li>)}
        </ul>
    )
}