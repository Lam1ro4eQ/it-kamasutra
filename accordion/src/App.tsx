import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

const App = () => {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <>Article 1</>
            <Rating value={3}/>
            <Accordion title={"This is Accordon 1"}/>
            <Accordion title={"This is Accordon 2"}/>
            <>Article 2</>
            <Rating value={4}/>
        </div>
    );
};

function PageTitle(props: any) {
    return <div>{props.title}</div>
}


export default App;