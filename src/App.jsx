import { useState } from 'react';
import './App.css'

function App (){
  
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const today = count === 0 ? "Today " : `${count} day${count > 1 ? "s" : ""} from today is `
  
  const date = new Date()
  date.setDate(date.getDate() + count)

  return(
    <>
    <div  className='main'>
    <div className='container'>
      <div className='btn-1'>
        <button onClick={() =>{
          if( step > 1){
           setStep(step - 1)
          }
         }}>-</button>
        <h3>Step {step}</h3>
        <button onClick={()=>setStep(step + 1) }
        >+</button>
      </div>
      <div className="btn-2">
         <button onClick={()=>{
          if(count >= step){
            setCount(count - step)
          }else{
            setCount(0)
          }
         }}>-</button>
        <h3>Count {count}</h3>
        <button onClick={()=> setCount(count + step)}>+</button>
      </div>
      <p>{today}{date.toDateString()}</p>
    </div>
    </div>
    </>
  )
}
export default App