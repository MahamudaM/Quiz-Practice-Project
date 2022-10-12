import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetails.css'
const CourstDetails = ({course}) => {
    const{name,logo,total,id}=course
    return (
        <div className='courseDetails'>
            <img src={logo} alt="" />
            <h2 className='corseText'> {name} Quiz</h2>
          
        
       
       <div className="corseBtnAndQuiz">
       <h4>Total Quiz  : {total}</h4>
       <Link to={`/quizTest/${id}` }><button className='courseBtn'>start Quiz</button></Link>
       </div>
            
           
            </div>


          
)};

export default CourstDetails;