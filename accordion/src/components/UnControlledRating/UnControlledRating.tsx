import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    select: 1|2|3|4|5
    setSelect: (select:1|2|3|4|5) => void
}

type RatingPropsType = {

}

export function UnControlledRating(props: RatingPropsType) {
    let [select, setSelect] = useState(0)
    return (
        <div>
            <Star selected={select > 0} setSelect={setSelect} select={1}/>
            <Star selected={select > 1} setSelect={setSelect} select={2}/>
            <Star selected={select > 2} setSelect={setSelect} select={3}/>
            <Star selected={select > 3} setSelect={setSelect} select={4}/>
            <Star selected={select > 4} setSelect={setSelect} select={5}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.setSelect(props.select)}}>{props.selected ? <b> star</b> : ' star'}</span>
    // if (props.selected === true) {
    //     return <span><b> star </b></span>
    // } else {
    //     return <span> star </span>
    // }
//     {? props.selected $$ `<span><b> star </b></span>` : `<span> star </span>`}
}

