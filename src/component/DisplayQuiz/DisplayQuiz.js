

import './DisplayQuiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// let [ color, setColor ] = useState ( false )
// onClick = { () => setColor( !color ) }
// className = { color ? "click korle jeita" ; "click na korle jeita" }




const DisplayQuiz = ({mcq}) => {
    const {question,options ,correctAnswer}=mcq
    
    const evenHandler=(x)=>{
        if(x===correctAnswer){
console.log(x)
            alert('corret anser')
        }
        else{
            
            // event.currentTarget.classList.add('red'); 
        }
        
            
        }
        const notify = () => toast(correctAnswer);
    return (
        <div className='quiz'>
            
                <button className='eyeBtn' onClick={notify}><EyeIcon className="btnIcon"/></button>
                <ToastContainer />
            <p>{question}
            
            <ul className='allAnser'>
      {options.map((x) =>
        <button className={`anserBtn `} onClick={()=>evenHandler(x)}>
            <li key={x.toString()} className= 'anser '>
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