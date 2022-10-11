import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetails.css'
const CourstDetails = ({course}) => {
    const{name,logo,total,id}=course
    return (
        <div className='courseDetails'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <div className="courseText">
        
        <p>total : {total}</p>
        <Link to={`/quizTest/${id}`}><button>start practice</button></Link>
            </div>
           
            </div>


          
)};

export default CourstDetails;