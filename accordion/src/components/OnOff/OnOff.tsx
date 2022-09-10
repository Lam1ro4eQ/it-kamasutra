import React from 'react';


type OnOffPropsType = {
    on: boolean
    SetOn: (on:boolean) => void
}


export const OnOff = (props: OnOffPropsType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px 10px',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const ofStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px 10px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: 'auto auto',
        backgroundColor: props.on ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.SetOn(true)
            }}>on
            </div>
            <div style={ofStyle} onClick={() => {
                props.SetOn(false)
            }}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

