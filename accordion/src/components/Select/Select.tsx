import React, {useState} from "react";

export type  SelectItemsType = {
    title: string
    value: number
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: SelectItemsType[]
}

export function Select(props: SelectPropsType) {
    const [parentValue, setParentValue] = useState(2)
    return (
        <div>
            <div >
                <div>{}</div>
                {props.items.map(i => <div>i.title</div>)}
            </div>
        </div>
    )
}



