import React, {useReducer, useState} from "react";
import {actions} from "@storybook/addon-actions";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

type ActionType = {
    type:string

}

const reduser = (state:boolean, action:ActionType) => {
    if(action.type = "TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}

export function UnControlledAccordion(props: AccordionPropsType) {
    // let [collapsed, Setcollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer (reduser,false)

    return <div>
        <AccordionTitle title={props.titleValue} Setcollapsed={()=>{Setcollapsed(!collapsed)}} />
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    Setcollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.Setcollapsed()}}>{props.title}</h3>
    )
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}