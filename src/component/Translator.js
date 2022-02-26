import react,{useState} from "react";
import DropDown from "./DropDown";
import Conver from "./Conver";

const options=[
    {
        label:'Africaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Dutch',
        value:'nl'
    }

];

const Translator=()=>{
    const [language,setLanguage]=useState(options[0])
    const [text,setText]=useState('');
    return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
        </div>

            <DropDown
            label="Select a Language"
            selected={language}
            onSelectChange={setLanguage}
            options={options} 
             />
             <hr/>
             <h3 className="ui header">Output</h3>
             <Conver text={text} language={language}/>
        </div>
    );
};

export default Translator;