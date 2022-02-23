import React from 'react';
import ReactDom from 'react-dom';
import Accordion from "./component/Accordion";

const items=[
    {
        title:'What is react?',
        content:'React is front-End fremawork,'
    },
    {
        title:'why you use React?',
        content:'we use react in form of component'
    },
    {
        title:'why use react',
        content:'Ract is most favorite library among users'
    }
]

export default()=>{
    return <div>
        <Accordion items={items} />
    </div>
}