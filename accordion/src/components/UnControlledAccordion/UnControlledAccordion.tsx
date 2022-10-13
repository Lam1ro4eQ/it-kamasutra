import React, {useReducer} from "react";
import {reduser} from "./Reduser";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export function UnControlledAccordion(props: AccordionPropsType) {
    // let [collapsed, Setcollapsed] = useState(false)
    let [state, dispatch] = useReducer (reduser,{collapsed:false})

    return <div>
        {/*<AccordionTitle title={props.titleValue} Setcollapsed={()=>{Setcollapsed(!collapsed)}} />*/}
        <AccordionTitle title={props.titleValue} Setcollapsed={()=>{dispatch({type:"TOGGLE-COLLAPSED"})}} />
        {!state.collapsed && <AccordionBody/>}
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