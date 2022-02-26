import React, {useState,useEffect} from "react";
import axios from 'axios';

const Conver=({language,text})=>{
    const [translated,setTranslated]=useState("");
    const [debounceText,setDebouncetext]=useState(text);

    useEffect(()=>{
        const timerId=setTimeout(()=>{
            setDebouncetext(text);
        },5000);
        return ()=>{
            clearTimeout(timerId);
        }
    },[text]);


    useEffect(()=>{
        const doTranslate=async ()=>{
         const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',
         {},
         {
            params:{
                q:debounceText,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IWDlM',
            },
        }
        );
        setTranslated(data.data.translation[0].translatedtext);
    };
    doTranslate();
    },[language,debounceText]);

    return <div> 
        <h1 className="ui header" >{translated}</h1>
    </div>;
};

export default Conver;