import React, {useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";


const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [on,SetOn] = useState(false)
    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <>Article 1</>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={"This is Accordon "} collapsed={collapsed} onClick={ () => {setCollapsed(!collapsed)}}/>

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
            <OnOff on={on} SetOn={()=>{SetOn(!on)}}/>
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