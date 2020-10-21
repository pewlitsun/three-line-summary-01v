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
        }
        setShowBtn((prev) => !prev)
    }

    const onAddButtonClick = (event) =>{
        event.stopPropagation();
    }
    
    const onEditButtonClick = (event) =>{
        event.stopPropagation();

        thisSmr.querySelector('.smr_editInput').style.display='';
        thisSmr.querySelector('.smr_editInput').value=
        thisSmr.querySelector('.smr_summary').innerText;
        // thisSmr.querySelector('.smr_summary').innerText=''

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
            {/* <span className='smr_summarySet'> */}
            <h5 className='smr_summary font_sans'>
                {summaryObj.contents}
                <input className='smr_editInput font_sans'/>
            </h5>
            {/* </span> */}

        </div>
    )
}

export default Summary;