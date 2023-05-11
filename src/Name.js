import React,{useState,useRef} from 'react'
import './InputsStyling.css'

const Name = ({forName}) => {
  const [value, setvalue] = useState('')
  const input=useRef()
  const handleButton=()=>{
    if(value.trim() !== ''){
      forName()
    }else{
      input.current.focus()
    }
  }
  return (
    <div className='inputsContainer'>
       <div className='inputInfo'>
            <p>Step 1/5</p>
            <h2>Let's start with your name</h2>
            <p>please fill in the details below</p>
       </div>
       <div>
            <p>Enter your name</p>
            <input type="text" ref={input} onInput={(e)=>setvalue(e.target.value)}/>
           <div className='btnContainer'> <button onClick={handleButton}>NEXT STEP</button></div>
       </div>
        
    </div>
  )
}

export default Name