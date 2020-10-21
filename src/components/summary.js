import React, { useEffect, useState } from "react"
import '../css/summary.css'

const Summary = ({summaryObj}) => {
    const [showBtn,setShowBtn] = useState(false);
    const [isEditable,setIsEditable] = useState(false);
    let thisSmr;
    const onSummaryClick = (event) =>{
        if(!showBtn){
            thisSmr.querySelector('.smr_buttonSet').style.display='';
        }else{
            thisSmr.querySelector('.smr_buttonSet').style.display='none';
            textInputToggle(true)
        }
        setShowBtn((prev) => !prev)
    }

    const onAddButtonClick = (event) =>{
        event.stopPropagation();
    }
    
    const onEditButtonClick = (event) =>{
        event.stopPropagation();   
        textInputToggle(false)
    }

    const textInputToggle = (toText)=>{
        const smrInput = thisSmr.querySelector('.smr_editInput');
        const smrText = thisSmr.querySelector('.smr_text');
        if(toText){
            smrInput.style.display='none';
            smrText.innerText=smrInput.value;
        }else{
            smrInput.style.display='';
            smrInput.value=smrText.innerText;
            smrText.innerText=''
        }
    }

    useEffect(()=>{
        thisSmr = document.getElementById(summaryObj.summaryId)
    })

    return(
        <div id={summaryObj.summaryId} className ='smr_summarySet' onClick={onSummaryClick}>
            <span className='smr_buttonSet'>
                <span className='smr_addSummaryButton'onClick={onAddButtonClick}></span>
                <span className='smr_editButton'onClick={onEditButtonClick}></span>
            </span>
            <span className='smr_summary font_sans'>
                <h5 className='smr_text'>{summaryObj.contents}</h5>
                <input className='smr_editInput font_sans' onClick={event=>{event.stopPropagation();}}/>
            </span>
        </div>
    )
}

export default Summary;