import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { useState } from 'react';
import DropDown from './component/DropDown';
import Translator from './component/Translator';
;
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
    return (
        <div >
            <Translator/>
        </div>
    );
};