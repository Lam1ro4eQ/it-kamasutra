import React, {useState} from "react";

export default {
    title: 'UseState demo'

}

function generate() {
    return 3232321
}

export const Example1 = () => {
    const [counter,setCounter] = useState(generate)

    const changer = (state:number) => {
        return state + 1
    }

    return <>
        <button onClick={() => {setCounter(changer)}}>+</button>
        {counter}
    </>
}



