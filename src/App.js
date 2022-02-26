import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { useState } from 'react';
import DropDown from './component/DropDown';

const options=[
    {
        label:"the color is red",
        value:"red"
    },
    {
        label:"the color is green",
        value:"green"
    },
    {
        label:"the color is blue",
        value:"blue"
    }
]

export default ()=>{
    const [selected,setSelected]=useState(options[0]);
    const [showDropdown,setDropdown]=useState(true);
    return (
        <div >
            <button onClick={()=>setDropdown(!showDropdown)}>Toggle DropDown</button>
            {
        showDropdown ?
        <DropDown
        selected={selected}
        onSelectChange={setSelected}
        options={options}
        />:null
            }
        </div>
    );
};