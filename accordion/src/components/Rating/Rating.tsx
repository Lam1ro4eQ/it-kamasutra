import React from "react";

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    value:number
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }

}

export default Rating