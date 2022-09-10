import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff stories',
    components: OnOff
}


export const OnMode = () => <OnOff on={true} SetOn={action('on or off clicked')}/>
export const OffMode = () => <OnOff on={false} SetOn={action('on or off clicked')}/>

export const ModeChanging = () => {
    const [value,SetValue] = useState(false)
    return <OnOff on={value} SetOn={SetValue}/>
}