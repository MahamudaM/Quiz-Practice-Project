

import './DisplayQuiz.css'

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
    
    return (
        <div className='quiz'>
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