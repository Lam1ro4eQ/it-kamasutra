import React, {useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {Select} from "./components/Select/Select";
import {SelectDymich} from "./components/Select/SelectDymich";


const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [on, SetOn] = useState(false)
    let [parentValue, setParentValue] = useState<number>(2)
    let [selectValue, setSelectValue] = useState<number>(2)



    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <>Article 1</>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<Accordion titleValue={"This is Accordon "} collapsed={collapsed}  items={[*/}
            {/*    {title: 'Dimych', value: 1},*/}
            {/*    {title: 'Valera', value: 2},*/}
            {/*    {title: 'Artem', value: 3},*/}
            {/*    {title: 'Viktor', value: 4}*/}
            {/*]} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/>*/}

            <>Article 2</>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UnControlledOnOff onChange={SetOn}/> {on.toString()}
            <UnControlledAccordion titleValue={"This is UnControlledAccordion "}/>
            <UnControlledRating/>
            <OnOff on={on} SetOn={() => {
                SetOn(!on)
            }}/>

            {/*<Select titleValue={"This is CUstom Select "} parentValue={parentValue} setParentValue={setParentValue} items={[*/}
            {/*    {title: 'Dimych', value: 1},*/}
            {/*    {title: 'Valera', value: 2},*/}
            {/*    {title: 'Artem', value: 3},*/}
            {/*    {title: 'Viktor', value: 4}*/}
            {/*]} />*/}
            <SelectDymich  value={selectValue} onChange={setSelectValue} items={[
                {title: 'Dimych', value: 0},
                {title: 'Valera', value: 1},
                {title: 'Artem', value: 2},
                {title: 'Viktor', value: 3}
            ]}/>
        </div>
    );
};

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <div>{props.title}</div>
}


export default App;