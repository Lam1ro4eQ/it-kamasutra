import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}


export const DifficulCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakevalue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)


export const HelpForReactMemoExample = () => {
    console.log("HelpForReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Semen", "Katya"])

    const newArray = useMemo(() => {
       const newArray = users.filter((u => u.toLowerCase().indexOf("a") > -1));
        return newArray;
    }, [users])

    const addUsers = () => {
        setUsers([...users,"Sveta"])
    }
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUsers}>add users</button>
        {counter}
        <Users users={newArray}/>
    </>
}




