import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pic from './soft_skills_1.jpg';
import './Home.css'
import CourstDetails from '../CourseDetails/CourstDetails';
const Home = () => {
    const {data} =useLoaderData()
    
   
    return (
        <div className='home-container'>
            <div className="home-banner"  style={{ backgroundImage: `url(${pic})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'344px' }}>
               <h1 className='banerText'>develope uour skil with practicing quiz</h1>
               
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