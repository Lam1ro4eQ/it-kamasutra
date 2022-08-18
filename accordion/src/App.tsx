import React from 'react';

const App = () => {
    return (
        <div>
            <Accordion/>
        </div>
    );
};

function Accordion() {
    return <div>
        <Accordiontitle/>
        <AccordionBody/>
    </div>
}

function Accordiontitle() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


function AccordionBody() {
    return (
        <h3>Menu</h3>
    )
}

export default App;