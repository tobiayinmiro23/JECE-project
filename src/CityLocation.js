import React,{useState,useRef} from 'react'
import './InputsStyling.css'

const CityLocation = ({forCityLocation}) => {
  const [value, setvalue] = useState('')
  const input=useRef()
  const handleButton=()=>{
    if(value.trim() !== ''){
      forCityLocation()
    }else{
      input.current.focus()
    }
  }
  return (
    <div className='inputsContainer'>
       <div className='inputInfo'>
            <p>Step 2/5</p>
            <h2>Your city location</h2>
            <p>please fill in the details below</p>
       </div>
       <div>
            <p>Enter your city location</p>
            <input type="text"  ref={input} onInput={(e)=>setvalue(e.target.value)}/>
           <div className='btnContainer'> <button onClick={handleButton}>NEXT STEP</button></div>
       </div>
        
    </div>
  )
}

export default CityLocation