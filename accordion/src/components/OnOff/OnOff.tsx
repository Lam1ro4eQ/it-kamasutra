import React from 'react';



type OnOffPropsType = {
    on: boolean
}



const OnOff = (props: OnOffPropsType) => {
    if (props.on) {
        return (
            <div>
                <button>on</button>
                <button>off</button>
                <input  type='radio'></input>
            </div>
        );
    } else {
        return (
            <div>
                <button>on</button>
                <button>off</button>
                <input type='radio'></input>
            </div>
        )
    }

};

export default OnOff;