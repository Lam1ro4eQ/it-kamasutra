import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

const App = () => {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <>Article 1</>
            <Rating value={3}/>
            <Accordion titleValue={"This is Accordon 1"} collapsed={true}/>
            <Accordion titleValue={"This is Accordon 2"} collapsed={false}/>
            <>Article 2</>
            <Rating value={4}/>
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