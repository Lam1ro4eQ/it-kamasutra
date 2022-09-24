import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import {Select, SelectPropsType} from "./Select";


export default {
    title: 'Select stories',
    components: 'Select'
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args: SelectPropsType) => <Select {...args} />;

const onClickCallback = action('some item was clicked')
const callbackProps = {}
export const OnModeCollapsed2 = Template.bind({})
OnModeCollapsed2.args = {
    titleValue: "This is Select stories",
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}]
}
export const OffModeCollapsed2 = Template.bind({})
OffModeCollapsed2.args = {
    titleValue: "This is Select stories",
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]
}


export const ModeChanging: ComponentStory<typeof Select> = (args) => {
    let [collapsed, setCollapsed] = useState(false)

    return <Select {...args} />
}
ModeChanging.args = {
    titleValue: "Users Select Custom",
    items: [
        {title: 'Alexa', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]
}
