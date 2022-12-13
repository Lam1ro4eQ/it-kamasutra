import React, {useMemo, useState} from "react";
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


export const SelectExample = () => {
    const [arr, setArr] = useState<Array<ArrType>>([
        {id: 1, countryId: 1, country: 'Russia', city: 'Moskow', residents: 16000000},
        {id: 2, countryId: 1, country: 'Russia', city: 'Sankt-Peterburg', residents: 6000000},
        {id: 3, countryId: 2, country: 'Belarus', city: 'Minsk', residents: 4000000},
        {id: 4, countryId: 1, country: 'Russia', city: 'Saratov', residents: 2000000},
        {id: 5, countryId: 2, country: 'Belarus', city: 'Brest', residents: 100000},
        {id: 6, countryId: 3, country: 'Ukraina', city: 'Kiev', residents: 4000000},
        {id: 7, countryId: 2, country: 'Belarus', city: 'Grodno', residents: 200000},
        {id: 8, countryId: 1, country: 'Russia', city: 'Kazan', residents: 2000000},
        {id: 9, countryId: 3, country: 'Ukraina', city: 'Odessa', residents: 1000000}
    ])
    const [count, setCount] = useState()
    // const [, set] = useState<number>(3)
    let filterArr = arr.filter(f => f.countryId === 1)
    let filterLetterMatchArr = arr.filter(f => f.city.toLowerCase().indexOf("a") > -1)
    let filterResidents = arr.filter(f => f.residents > 1000000)
    return (
        <div>
            <div>
                <h3>Select city in Russia</h3>
                <select>
                    {filterArr.map(m => <option>{m.city}</option>)}
                </select>
            </div>
            <div>
                <h3>Select city letter match a</h3>
                <select>
                    {filterLetterMatchArr.map(m => <option>{m.city}</option>)}
                </select>
            </div>
            <div>
                <h3>Select city residents over 1m</h3>
                <select>
                    {filterResidents.map(m => <option>{m.city}</option>)}
                </select>
            </div>
        </div>
    )
}

