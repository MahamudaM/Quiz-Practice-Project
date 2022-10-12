import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pic from './soft_skills_1.jpg';
import './Home.css'
import CourstDetails from '../CourseDetails/CourstDetails';
const Home = () => {
    const {data} =useLoaderData()
    
   
    return (
        <div className='home-container'>
          {/* background img */}
            <div className="home-banner"  style={{ backgroundImage: `url(${pic})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'100%',
            height:'344px' }}>
{/* img text */}

<h1 className='banerText'>develope uour skil with practicing quiz</h1>
               {/* <p className='banarParagrap'>The free quiz  for testing students and staff.Our free test improve your programming
                 knowledge.Assessment, instruction, and practice that motivate every student to mastery</p> */}

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