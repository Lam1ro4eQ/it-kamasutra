import React, {useState} from 'react';


type UnOnOffPropsType = {
    onChange: (on:boolean) => void
}


export const UnControlledOnOff = (props: UnOnOffPropsType) => {
    let [on,Seton] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px 10px',
        backgroundColor: on ? 'green' : 'white'
    };
    const ofStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px 10px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: 'auto auto',
        backgroundColor: on ? 'green' : 'red'
    };

    const onClicked = () => {
        {Seton(true)}
        props.onChange(true)
    }
    const ofClicked = () => {
        {Seton(false)}
        props.onChange(false)
    }

        return (
            <div>
                <div style={onStyle} onClick={onClicked}>on</div>
                <div style={ofStyle} onClick={ofClicked}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        );
};
