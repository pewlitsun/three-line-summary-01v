import React, { useEffect, useState } from "react"
import '../css/summary.css'

const Summary = ({summaryObj}) => {
    const [isEditable,setIsEditable] = useState(false);
    let thisSmr;
    const onSummaryClick = (event) =>{
    }

    const onAddButtonClick = (event) =>{
        event.stopPropagation();
    }
    
    const onEditButtonClick = (event) =>{
        event.stopPropagation();   
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
                <textarea className='smr_editInput font_sans' onClick={event=>{event.stopPropagation();}}/>
            </span>
        </div>
    )
}

export default Summary;