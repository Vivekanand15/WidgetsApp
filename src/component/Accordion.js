import React from "react";
import ReactDOM from "react-dom";

const Accordion=({items})=>{
    const onTitleClick=(index)=>{
        console.log('just clicked',index)
    }
    const renderedItems=items.map((item,index)=>{
        return <div key={item.title}>
            <div 
            className="title active"
            onClick={()=>onTitleClick(index)}
            >
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className="content active">
            <p>{item.content}</p>
        </div>
        </div>
    });
    return <div className="ui styled accordion">
        {renderedItems}
    </div>
}
export default Accordion;