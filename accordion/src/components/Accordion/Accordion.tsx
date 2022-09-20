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
    onClickLi: (value:number)=>void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items} onClickLi={props.onClickLi}/>}
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
    onClickLi: (value:number)=>void
}

function AccordionBody(props:AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={()=>{props.onClickLi(i.value)}} key={index}>{i.title}</li>)}
            {/*<li>1</li>*/}
            {/*<li>1</li>*/}
            {/*<li>1</li>*/}
            {/*<li>1</li>*/}
        </ul>
    )
}