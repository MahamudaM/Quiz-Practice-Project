import React from 'react';
import './DisplayQuiz.css'


const DisplayQuiz = ({mcq}) => {
    const {question,options ,correctAnswer}=mcq
    const evenHandler=(x)=>{
        if(x===correctAnswer){
            console.log('red')
        }
    }
    return (
        <div className='quiz'>
            <p>{question}
            
            <ul className='allAnser'>
      {options.map((x) =>
        <button className='anserBtn' onClick={()=>evenHandler(x)}>
            <li key={x.toString()} className= 'anser'>
          {x}
          
        </li>
        </button>
        
        )}
    </ul>
        
            </p>
            
        </div>
    );
};

export default DisplayQuiz;