import React from "react";

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    value:number
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }
//     {? props.selected $$ `<span><b> star </b></span>` : `<span> star </span>`}
}

