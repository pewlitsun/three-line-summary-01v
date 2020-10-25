import React, { useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Summary from './components/summary';
import SummarySet from './components/summarySet';

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  let smrSet;
  const clickEditBtn = () => {
    smrSet.forEach(v => {
      if(isEditMode){
        v.querySelector('.smr_text').innerText = v.querySelector('.smr_editInput').value;
        v.querySelector('.smr_text').style.display = 'inline-block';
        v.querySelector('.smr_editInput').style.display = 'none';
      }else{
        v.querySelector('.smr_editInput').value = v.querySelector('.smr_text').innerText;
        v.querySelector('.smr_text').style.display = 'none';
        v.querySelector('.smr_editInput').style.display = 'inline-block';
      }
    })
    setIsEditMode(prev => !prev)
  }
  
  

  useEffect(()=>{
    smrSet =document.querySelectorAll('.smr_summarySet');
  })

  return (
    <div className="App">
      <button id='editBtn' onClick={clickEditBtn}>{isEditMode ? '수정완료' : '수정하기'}</button>
      <SummarySet></SummarySet>
    </div>
  );
}

export default App;
