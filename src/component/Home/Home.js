import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pic from './soft_skills_1.jpg';
import './Home.css'
import CourstDetails from '../CourseDetails/CourstDetails';
const Home = () => {
    const {data} =useLoaderData()
    
   
    return (
        <div className='home-container'>
            <div className="home-banner" style={{ backgroundImage: `url(${pic})`} }>
               <img src={pic} alt="" />
            </div>
            <div className="home-course-details">
            {
  data.map(course=><CourstDetails 
    key={course.id}
      course={course}
      ></CourstDetails>)
  
            }
            
            </div>
        </div>
    );
};

export default Home;