import react,{useState,useEffect} from 'react';

const DropDown=(props)=>{
    const [open,setOpen]=useState(false);
    useEffect(()=>{
        document.body.addEventListener('Click',()=>{
            setOpen(false);
        });
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
    return(
        <div className='ui form'>
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