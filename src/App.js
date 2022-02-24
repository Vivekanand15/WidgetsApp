import React from 'react';
import ReactDom from 'react-dom';
import Search from './component/Search';

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
        <br/>
        <Search/>
    </div>
}