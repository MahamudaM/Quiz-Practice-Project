import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayRechart from '../DisplayRechart/DisplayRechart';

const QuizChart = () => {
    const {data}=useLoaderData()
    
    console.log(data)
    return (
        <div >
            <h1 style={{textAlign:'center'}}>Quiz measure by Rechart</h1>
            {
               
                <DisplayRechart
                    
                    data={data}
                    ></DisplayRechart>
                    
            }
        </div>
    );
};

export default QuizChart;