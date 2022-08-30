import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    
}

export function UnControlledRating(props: RatingPropsType) {
    let [select, SetSelect] = useState(0)
    return (
        <div>
            <Star selected={select > 0}/><button onClick={()=>{SetSelect(1)}}>1</button>
            <Star selected={select > 1}/><button onClick={()=>{SetSelect(2)}}>2</button>
            <Star selected={select > 2}/><button onClick={()=>{SetSelect(3)}}>3</button>
            <Star selected={select > 3}/><button onClick={()=>{SetSelect(4)}}>4</button>
            <Star selected={select > 4}/><button onClick={()=>{SetSelect(5)}}>5</button>
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

