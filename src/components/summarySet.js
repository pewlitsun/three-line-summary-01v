import React from 'react';
import Summary from './summary';

function SummarySet(){
    const test = (event) =>{
        const {
            target:{checked}
        } = event;

            document.querySelectorAll('.smr_summary').forEach((v,i)=>{
                v.classList.toggle('font_sans',!checked);
                v.classList.toggle('font_serif',checked);
            })
    }
    
    return(
        <>
        <input id='test' type='checkbox' onClick={test}/>
        <div className="summaryset_div">
            <Summary key='1' contents='이 사이트는 세줄로 요약하여 글을 작성하는 사이트입니다.'></Summary>
            <Summary key='2' contents='요약한 각각의 문장은 다시 세줄로 풀어쓸 수 있습니다.'></Summary>
            <Summary key='3' contents='모든 문장을 세줄로 나타내고나면 글쓰기가 완료됩니다.'></Summary>
        </div>
        </>
    )
}

export default SummarySet;