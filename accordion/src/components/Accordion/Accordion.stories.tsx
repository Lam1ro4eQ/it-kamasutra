import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    components: Accordion
}


export const OnModeCollapsed = () => <Accordion titleValue={"This is Accordon stories"} collapsed={true} onClick={action('onCollapsed')}/>
export const OffModeCollapsed = () => <Accordion titleValue={"This is Accordon stories"} collapsed={false} onClick={action('onCollapsed')}/>




export const ModeChanging = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"This is Accordon stories mode change"} collapsed={collapsed} onClick={()=>{setCollapsed(!collapsed)}}/>
}