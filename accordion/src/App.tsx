import React, {useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";


const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <>Article 1</>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={"This is Accordon 1"} collapsed={true}/>
            <Accordion titleValue={"This is Accordon 2"} collapsed={false}/>

            <>Article 2</>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
            <UnControlledAccordion titleValue={"This is UnControlledAccordion "}/>
            <UnControlledRating/>
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