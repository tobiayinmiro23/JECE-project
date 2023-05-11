import React,{useState,useRef} from 'react'
import './InputsStyling.css'

const CountryOfResidense = ({forCountryOfResidence}) => {
  const [value, setvalue] = useState('')
  const input=useRef()
  const handleButton=()=>{
    if(value.trim() !== ''){
      forCountryOfResidence()
    }else{
      input.current.focus()
    }
  }
  return (
    <div className='inputsContainer'>
       <div className='inputInfo'>
            <p>Step 5/5</p>
            <h2>Your country of residence</h2>
            <p>please fill in the details below</p>
       </div>
       <div>
            <p>Enter your country of residence</p>
            <input type="text"  ref={input} onInput={(e)=>setvalue(e.target.value)}/>
           <div className='btnContainer'> <button onClick={handleButton}>NEXT STEP</button></div>
       </div>
        
    </div>
  )
}

export default CountryOfResidense