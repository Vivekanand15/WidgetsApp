import react,{useState,useEffect,useRef} from 'react';

const DropDown=(props)=>{
    const [open,setOpen]=useState(false);
    const ref=useRef();
    useEffect(()=>{
        const onBodyCLick=(event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyCLick);
        return ()=>{
            document.body.removeEventListener('click',onBodyCLick);
        };
    },[]);
    const renderOption=props.options.map((option)=>{
        if(option.value===props.selected.value){
            return null;
        }
        return (
            <div 
            className='item' 
            key={option.value} 
            onClick={()=>props.onSelectChange(option)}>
                {option.label};
            </div>
        );
    });
    console.log(ref);
    return(
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>Select A Color</label>
                <div onClick={()=>setOpen(!open)}  className={`ui selection dropdown ${open?'active visible':""}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{props.selected.label}</div>
                    <div className={`menu ${open?'visible transition':""}`}>
                        {renderOption}
                    </div>
                </div>
            </div>
        </div>
    );

};
export default DropDown;