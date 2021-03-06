import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import FullInput from "./FullInput";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    taskID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    // let [title, setTitle] = useState("")
    // let [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     if (title.trim() !== "") {
    //         props.addTask(props.todolistID, title.trim());
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    const onAllClickHandler = () => props.changeFilter(props.taskID,"all"  );
    const onActiveClickHandler = () => props.changeFilter(props.taskID,"active");
    const onCompletedClickHandler = () => props.changeFilter(props.taskID,"completed");
    const addTaskHandler = (newTitle:string) => {
        props.addTask(props.taskID, newTitle)
    }

    return <div>
        <h3>{props.title}</h3>
        <FullInput callBack={addTaskHandler}/>


        {/*<div>*/}
        {/*    <input value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           className={error ? "error" : ""}*/}
        {/*    />*/}
        {/*    <button onClick={addTask}>+</button>*/}
        {/*    {error && <div className="error-message">{error}</div>}*/}
        {/*</div>*/}
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.taskID, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.taskID,t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}






// export function Todolist(props: PropsType) {
//
//     // let [title, setTitle] = useState("")
//     // let [error, setError] = useState<string | null>(null)
//
//     // const addTask = () => {
//     //     if (title.trim() !== "") {
//     //         props.addTask(props.todolistID, title.trim());
//     //         setTitle("");
//     //     } else {
//     //         setError("Title is required");
//     //     }
//     // }
//
//     // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     setTitle(e.currentTarget.value)
//     // }
//
//     // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//     //     setError(null);
//     //     if (e.charCode === 13) {
//     //         addTask();
//     //     }
//     // }
//
//     const onAllClickHandler = () => props.changeFilter(props.todolistID,"all"  );
//     const onActiveClickHandler = () => props.changeFilter(props.todolistID,"active");
//     const onCompletedClickHandler = () => props.changeFilter(props.todolistID,"completed");
//     const addTaskHandler = (newTitle:string) => {
//         props.addTask(props.todolistID, newTitle)
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <FullInput callBack={addTaskHandler}>
//
//         </FullInput>
//         {/*<div>*/}
//         {/*    <input value={title}*/}
//         {/*           onChange={onChangeHandler}*/}
//         {/*           onKeyPress={onKeyPressHandler}*/}
//         {/*           className={error ? "error" : ""}*/}
//         {/*    />*/}
//         {/*    <button onClick={addTask}>+</button>*/}
//         {/*    {error && <div className="error-message">{error}</div>}*/}
//         {/*</div>*/}
//         <ul>
//             {
//                 props.tasks.map(t => {
//                     const onClickHandler = () => props.removeTask(props.todolistID, t.id)
//                     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//                         props.changeTaskStatus(props.todolistID,t.id, e.currentTarget.checked);
//                     }
//
//                     return <li key={t.id} className={t.isDone ? "is-done" : ""}>
//                         <input type="checkbox"
//                                onChange={onChangeHandler}
//                                checked={t.isDone}/>
//                         <span>{t.title}</span>
//                         <button onClick={onClickHandler}>x</button>
//                     </li>
//                 })
//             }
//         </ul>
//         <div>
//             <button className={props.filter === 'all' ? "active-filter" : ""}
//                     onClick={onAllClickHandler}>All</button>
//             <button className={props.filter === 'active' ? "active-filter" : ""}
//                     onClick={onActiveClickHandler}>Active</button>
//             <button className={props.filter === 'completed' ? "active-filter" : ""}
//                     onClick={onCompletedClickHandler}>Completed</button>
//         </div>
//     </div>
// }