import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, Setcollapsed] = useState(false)

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