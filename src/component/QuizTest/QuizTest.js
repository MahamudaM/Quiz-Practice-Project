import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from '../DisplayQuiz/DisplayQuiz';

const QuizTest = () => {
    const {data} = useLoaderData()
    const {questions }=data
    console.log(questions)
    return (
        <div>
           {
            questions.map(mcq=><DisplayQuiz key={mcq.id} mcq={mcq}></DisplayQuiz>)

           }
        </div>
    );
};

export default QuizTest;