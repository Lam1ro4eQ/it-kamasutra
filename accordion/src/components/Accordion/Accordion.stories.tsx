import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {AccordionPropsType} from "./Accordion";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'Accordion stories',
    components: Accordion
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;

export const OnModeCollapsed2 = Template.bind({})
OnModeCollapsed2.args = {
    titleValue: "This is Accordon stories",
    collapsed:  true,
    onClick: action('onCollapsed')
}

export const OnModeCollapsed = () => <Accordion titleValue={"This is Accordon stories"} collapsed={true}
                                                onClick={action('onCollapsed')}/>
export const OffModeCollapsed = () => <Accordion titleValue={"This is Accordon stories"} collapsed={false}
                                                 onClick={action('onCollapsed')}/>


export const ModeChanging = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"This is Accordion stories mode change"} collapsed={collapsed} onClick={() => {
        setCollapsed(!collapsed)
    }}/>
}