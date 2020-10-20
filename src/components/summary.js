import React from "react"
import '../css/summary.css'

const Summary = ({contents}) => {
    return(
        <div className ='smr_div'>
            <h5 className='smr_summary font_sans'>{contents}</h5>
        </div>
    )
}

export default Summary;