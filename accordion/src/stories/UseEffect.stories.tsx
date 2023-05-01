import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'

}

function generate() {
    return 3232321
}

export const Example1 = () => {
    const [counter,setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(()=>{
        console.log("useEffect")
    },[counter])



    return <>

        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
    </>
}


export const ExampleSetTimeout = () => {
    const [counter,setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(()=>{

        setTimeout(()=>{
            console.log("settimeout")
            document.title = counter.toString()
        },1000)
    },[])



    return <>

        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
    </>
}


export const ExampleSetInterval  = () => {
    const [counter,setCounter] = useState(1)

    console.log("SimpleInterval")

    useEffect(()=>{

        setTimeout(()=>{
            console.log("setinterval")
            setCounter(counter + 1)
        },1000)
    },[counter]) // или не ставить зависимость а - setCounter((state)=>{state + 1}) там замыкание и counter = 1



    return <>

        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
    </>
}



