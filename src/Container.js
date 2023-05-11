import React,{useState,useRef} from 'react'
import './Container.css'
import Name from './Name'
import CityLocation from './CityLocation'
import TelephoneNumber from './TelphoneNumber'
import CountryOfResidense from './CountryOfResidense'
import HouseAddress from './HouseAddress'
const Container = ({handlePage}) => {
    const [field, setfield] = useState('name')
    const [lightMode, setlightMode] = useState(true)

    // for the button in the name component
    const forName=()=>{
        setfield('citylocation')
        let allImg=document.querySelectorAll('.info .wrapper img')
        let activeImg=document.querySelector('.info .wrapper .img2')
        let allPointer=document.querySelectorAll('.pointer .info p')
        let activePointer=document.querySelector('.pointer .info .circle2')
        allImg.forEach(element => { 
                element.classList.remove('active')
        });
        allPointer.forEach(element => { 
            element.classList.remove('active')
        });
    activePointer.classList.add('active')
    activeImg.classList.add('active')
    }
    // for the button in the City Location component
    const forCityLocation=()=>{
        setfield('telephoneno')
        let allImg=document.querySelectorAll('.info .wrapper img')
        let activeImg=document.querySelector('.info .wrapper .img3')
        let allPointer=document.querySelectorAll('.pointer .info p')
        let activePointer=document.querySelector('.pointer .info .circle3')
        allImg.forEach(element => { 
                element.classList.remove('active')
        });
        allPointer.forEach(element => { 
            element.classList.remove('active')
        });
    activePointer.classList.add('active')
    activeImg.classList.add('active')
    }
    // for the button in the Telephone Number component
    const forTelephoneNo=()=>{
        setfield('countryofresidence')
        let allImg=document.querySelectorAll('.info .wrapper img')
        let activeImg=document.querySelector('.info .wrapper .img4')
        let allPointer=document.querySelectorAll('.pointer .info p')
        let activePointer=document.querySelector('.pointer .info .circle4')
        allImg.forEach(element => { 
                element.classList.remove('active')
        });
        allPointer.forEach(element => { 
            element.classList.remove('active')
        });
    activePointer.classList.add('active')
    activeImg.classList.add('active')
    }
    // for the button in the Country Of Residence component
    const forCountryOfResidence=()=>{
        setfield('houseaddress')
        let allImg=document.querySelectorAll('.info .wrapper img')
        let activeImg=document.querySelector('.info .wrapper .img5')
        let allPointer=document.querySelectorAll('.pointer .info p')
        let activePointer=document.querySelector('.pointer .info .circle5')
        allImg.forEach(element => { 
                element.classList.remove('active')
        });
        allPointer.forEach(element => { 
            element.classList.remove('active')
        });
    activePointer.classList.add('active')
    activeImg.classList.add('active')
    }
    const Active=(e)=>{
    let active=document.querySelectorAll('.info .wrapper img')
        active.forEach(element => { 
                element.classList.remove('active')
        });
        e.target.classList.add('active')
    }
    // to change the colour of  the name img
    const Pointer1=(e)=>{
        setfield('name')
        let pointer=document.querySelectorAll('.pointer .info p')
        let pointer1=document.querySelector('.pointer .info .circle1')
        pointer.forEach(element => { 
            element.classList.remove('active')
        });
    pointer1.classList.add('active')
    Active(e)
    }
    // to change the colour of  the city location img
    const Pointer2=(e)=>{
        setfield('citylocation')
        let pointer=document.querySelectorAll('.pointer .info p')
        let pointer2=document.querySelector('.pointer .info .circle2')
        pointer.forEach(element => { 
            element.classList.remove('active')
        });
    pointer2.classList.add('active')
    Active(e)
    }
    // to change the colour of  the telephone number img
    const Pointer3=(e)=>{
        setfield('telephoneno')
        let pointer=document.querySelectorAll('.pointer .info p')
        let pointer3=document.querySelector('.pointer .info .circle3')
        pointer.forEach(element => { 
            element.classList.remove('active')
        });
    pointer3.classList.add('active')
    Active(e)
    }
    // to change the colour of  the house address img
    const Pointer4=(e)=>{
        setfield('houseaddress')
        let pointer=document.querySelectorAll('.pointer .info p')
        let pointer4=document.querySelector('.pointer .info .circle4')
        pointer.forEach(element => { 
            element.classList.remove('active')
        });
    pointer4.classList.add('active')
    Active(e)
    }
    // to change the colour of  the country of residence img
    const Pointer5=(e)=>{
        setfield('countryofresidence')
        let pointer=document.querySelectorAll('.pointer .info p')
        let pointer5=document.querySelector('.pointer .info .circle5')
        pointer.forEach(element => { 
            element.classList.remove('active')
        });
    pointer5.classList.add('active')
    Active(e)
    }
  return (
  <div className='JECE'>
    <nav>
        <div className="jeceImg"><img src="https://jeceoverseasstudies.com/wp-content/uploads/2020/09/JML.png" alt="" /></div>
        <div className="modeWrapper">
            <div className="mode"><button onClick={()=>setlightMode(!lightMode)}>change mode <img className='modeImg' src={lightMode ? "/image/night-mode.png" : "image/sun.png"}   alt="" /></button></div>
            <h3 onClick={()=>handlePage('about')}>About</h3>
        </div>
    </nav>
     <div className={lightMode ? 'lightMode' : 'darkMode'}>
     <div className='Container'>
        <div className="intro">
        <h2>My Skill Level</h2>
        <p>Answer the following questions to begin your plan</p>
        </div>
        <div className='flex'>
            <div className="heading">
               <div className='info'>
                    <div className="wrapper">
                        <h4>Your Name</h4>
                            <img className='active img1' onClick={(e)=>Pointer1(e)} src="/image/user (1).png" alt="" />
                    </div>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                    <div className="wrapper">
                        <h4>City <br /> Location</h4>
                         <img onClick={(e)=>Pointer2(e)} className='img2' src="/image/location.png" alt="" />
                    </div>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                    <div className="wrapper">
                        <h4>Telephone <br /> Number</h4>
                        <img onClick={(e)=>Pointer3(e)} className='img3' src="/image/call (1).png" alt=""/>
                    </div>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                    <div className="wrapper">
                        <h4>House <br />Address </h4>
                        <img onClick={(e)=>Pointer4(e)} className='img4' src="/image/house.png" alt="" />
                    </div>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                    <div className="wrapper">
                        <h4>Country of<br />Residence</h4>
                         <img onClick={(e)=>Pointer5(e)} className='img5' src="/image/earth.png" alt="" />
                    </div>
               </div>
            </div>
            <div className="pointer">
               <div className='info'>
                   <div className="firstvr vr"></div>
                     <p   className="circle1  active"></p>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                        <p  className="circle2"></p>
                        <div className="vr"></div>
               </div>
               <div className='info'>
                        <p  className="circle3"></p>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                    <p  className="circle4"></p>
                    <div className="vr"></div>
               </div>
               <div className='info'>
                        <p  className="circle5"></p>
                        <div className="vr lastvr"></div>
               </div>
            </div>
            <div className='inputsContainer'>
                {field === 'name' && <Name forName={forName}/>}
                {field === 'citylocation' && <CityLocation forCityLocation={forCityLocation}/>}
                {field === 'telephoneno' && <TelephoneNumber forTelephoneNo={forTelephoneNo}/>}
                {field === 'countryofresidence' && <CountryOfResidense forCountryOfResidence={forCountryOfResidence}/>}
                {field === 'houseaddress' && <HouseAddress/>}
            </div>
        </div>
    </div>
   </div>
  </div>
  )
}

export default Container