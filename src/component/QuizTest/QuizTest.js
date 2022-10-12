import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from '../DisplayQuiz/DisplayQuiz';

const QuizTest = () => {
    const {data} = useLoaderData()
    const {questions,name }=data
    console.log(data)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Start practice {name} quiz</h1>
          
            
    
            
            {
                
            questions.map(mcq=><DisplayQuiz key={mcq.id} mcq={mcq}></DisplayQuiz>)

           }

        </div>
    );
};

export default QuizTest;