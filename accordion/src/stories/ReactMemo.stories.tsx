import React, {useState} from "react";

export default {
    title: 'React.memo demo'

}

const NewMessagesCounter = (props:{count:number}) => {
    return <div>{props.count}</div>
}

type usersType = {
    users:Array<string>
}

const UsersSecret = (props: {users:Array<string>}) => {
    console.log("USERS")
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter,setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Semen","Katya"])
    const addUsers = () => {
        setUsers([...users,"Alex"])
    }
    return <>
        <button onClick={() => {setCounter(counter+1)}}>+</button>
        <button onClick={addUsers}>add users</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}



