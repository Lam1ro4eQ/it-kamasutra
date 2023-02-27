import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';

type PropsType = {
    callBack: (newTitle:string) => void
}

const FullInput = (props:PropsType) => {

    let myRef = useRef<HTMLInputElement>(null)

    // let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        if(myRef.current) {
            props.callBack(myRef.current.value);
        }
    }

    // const addTask = () => {
    //     // const newTitle = title.trim()
    //     if (newTitle.trim() !== "") {
    //         props.callBack(newTitle);
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }

    return (
        <div>
            <input
                   ref={myRef}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default FullInput;