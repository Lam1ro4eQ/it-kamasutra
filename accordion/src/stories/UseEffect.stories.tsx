import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'

}

function generate() {
    return 3232321
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect")
    }, [counter])


    return <>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
    </>
}


export const ExampleSetTimeout = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {

        setTimeout(() => {
            console.log("settimeout")
            document.title = counter.toString()
        }, 1000)
    }, [])


    return <>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
    </>
}


export const ExampleSetInterval = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleInterval")

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log("setinterval")
            setCounter(counter + 1)
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter]) // или не ставить зависимость а - setCounter((state)=>{state + 1}) там замыкание и counter = 1


    return <>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleInterval")

    useEffect(() => {
        console.log("Effect occurred")
    }, [counter]) // или не ставить зависимость а - setCounter((state)=>{state + 1}) там замыкание и counter = 1


    return <>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component render with" + text)
    const handler = (e:KeyboardEvent) => {
        console.log(e.key)
        setText(text + e.key)
    }
    useEffect(() => {
        window.document.addEventListener('keypress', handler)
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text]) //отписка от window.document и заччистка useEffect


    return <>
        Typed Text: {text}
    </>
}

