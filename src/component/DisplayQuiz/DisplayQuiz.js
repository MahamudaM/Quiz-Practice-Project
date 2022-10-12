

import './DisplayQuiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useState } from 'react';
// import { useToast } from 'react-toastify';
// import { ToastProvider} from 'react-toast-notifications';


const DisplayQuiz = ({mcq}) => {
  
    const {question,options ,correctAnswer}=mcq
    // show toast

    let [ color, setColor ] = useState ( false )
    


    const evenHandler =(x)=>{
        if(x===correctAnswer){
            setColor( !color )
           

           
              toast(' Excelient ! you choice correct answer', x)          
        }
        else{
            toast('Opps ! you answer is incorrect', x)  
            // event.currentTarget.classList.add('red'); 
        }
        
            
        }
        const notify = () => toast(correctAnswer);
    return (
        <div>
            
        <div className='quiz'>
            
                <button className='eyeBtn' onClick={notify}><EyeIcon className="btnIcon"/></button>
                
            <p>{question.slice (3, -4)}
            
            <ul className='allAnser'>
      {options.map((x) =>
        <button className={`anserBtn ${ color ? " green" : "" }`} onClick={()=>evenHandler(x)}>
        <li key={x.toString()} className= {`anser `}>
          {x}
        </li>
        </button>
       
        )}
    </ul>
    <ToastContainer />
  </p>   
  </div>
  
 
        </div>
        
    );
};

// const Apps = () => (
//     <ToastProvider>
//       <DisplayQuiz />
//     </ToastProvider>
//   )

export default DisplayQuiz