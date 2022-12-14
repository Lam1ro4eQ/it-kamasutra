import React, {MouseEventHandler, useCallback, useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: 'UseMemo'
}

type ArrType = {
    id: number
    countryId: number
    country: string
    city: string
    residents: number
}
type PropsType = {
    title: string
    sities: Array<ArrType>
    count: MouseEventHandler<HTMLButtonElement>
}

export const Countries = React.memo((props:PropsType) => {
    console.log("rerender Countries")
    return (
        <div>
            <h3>{props.title}</h3>
            <select>
                {props.sities.map(m => <option>{m.city}</option>)}
            </select>
            <button onClick={props.count}>+</button>
        </div>
    )
})

// const CountriesMemo = React.memo(Countries)

export const SelectExample = () => {
    console.log("rerender")
    const arr = [
        {id: 1, countryId: 1, country: 'Russia', city: 'Moskow', residents: 16000000},
        {id: 2, countryId: 1, country: 'Russia', city: 'Sankt-Peterburg', residents: 6000000},
        {id: 3, countryId: 2, country: 'Belarus', city: 'Minsk', residents: 4000000},
        {id: 4, countryId: 1, country: 'Russia', city: 'Saratov', residents: 2000000},
        {id: 5, countryId: 2, country: 'Belarus', city: 'Brest', residents: 100000},
        {id: 6, countryId: 3, country: 'Ukraina', city: 'Kiev', residents: 4000000},
        {id: 7, countryId: 2, country: 'Belarus', city: 'Grodno', residents: 200000},
        {id: 8, countryId: 1, country: 'Russia', city: 'Kazan', residents: 2000000},
        {id: 9, countryId: 3, country: 'Ukraina', city: 'Odessa', residents: 1000000}
    ]
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    const [count3, setCount3] = useState(1)
    let counter1 = useCallback(() => {
        setCount1(count1 + 1)
        console.log(1)
    }, [count1])
    let counter2 = useCallback(() => {
        setCount2(count2 + 1)
        console.log(2)
    }, [count2])
    let counter3 = useCallback( () => {
        setCount3(count3 + 1)
        console.log(3)
    }, [count3])
    // const [, set] = useState<number>(3)
    let filterArr = arr.filter(f => f.countryId === 1)
    let filterLetterMatchArr = useMemo(()=> arr.filter(f => f.city.toLowerCase().indexOf("a") > -1), [])
    let filterResidents = useMemo(()=>arr.filter(f => f.residents > 1000000),[])
    return (
        <div>
            {/*<div>*/}
            {/*    <h3>Select city in Russia</h3>*/}
            {/*    <select>*/}
            {/*        {filterArr.map(m => <option>{m.city}</option>)}*/}
            {/*    </select>*/}
            {/*    <button onClick={counter1}>+</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>Select city letter match a</h3>*/}
            {/*    <select>*/}
            {/*        {filterLetterMatchArr.map(m => <option>{m.city}</option>)}*/}
            {/*    </select>*/}
            {/*    <button onClick={counter2}>+</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>Select city residents over 1m</h3>*/}
            {/*    <select>*/}
            {/*        {filterResidents.map(m => <option>{m.city}</option>)}*/}
            {/*    </select>*/}
            {/*    <button onClick={counter3}>+</button>*/}
            {/*</div>*/}
            <Countries title={'Select city in Russia'} sities={filterArr} count={counter1}/>
            <Countries title={'Select city letter match a'} sities={filterLetterMatchArr} count={counter2}/>
            <Countries title={'Select city residents over 1m'} sities={filterResidents} count={counter3}/>
        </div>
    )
}

