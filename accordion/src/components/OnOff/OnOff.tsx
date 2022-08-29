import React, {useState} from 'react';


type OnOffPropsType = {
    // on: boolean
}


const OnOff = (props: OnOffPropsType) => {
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

        return (
            <div>
                <div style={onStyle} onClick={()=>{Seton(true)}}>on</div>
                <div style={ofStyle} onClick={()=>{Seton(false)}}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        );
};

export default OnOff;