import React from 'react'
import './about.css'

const About = ({handlePage}) => {
  return (
    <div className='About'>
        
            <nav>
                <div className="back" onClick={()=>handlePage('home')}> <img src='/image/back.png' /> </div>
            </nav>
            <div className="summary">
                <h1>Summary</h1>
                <p>this project was made with react,it is fully responsive and fully functional (i added javaScript functionality). No dependencies were used and it was made with two react hooks UseRef and UseState. I used UseRef to select and style some htlm elements and i used UseState to change the state of the mode from light mode to dark mode and in conjunction with conditional rendering to chose which component should be rendered.</p>
            </div>
            <div className="overview">
                <h1>Project overview</h1>
                <div>
                    <div className="wrapper">
                    <h4>Frame work used</h4>
                    <p>React</p>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <h4>Fully responsive</h4>
                    <p>Yes</p>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <h4>Fully functional</h4>
                    <p>Yes</p>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <h4>Dependencies used</h4>
                    <p>0</p>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <h4>React hooks used</h4>
                    <ol>
                        <li>UseRef</li>
                        <li>UseState</li>
                    </ol>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <h4>Hosting platform</h4>
                    <p>Netlify</p>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <a target='_blank' href="https://github.com/tobiayinmiro23/JECE-project"><h4>Github repository Link</h4></a>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                    <a target='_blank' href="https://tobiayinmiro23.github.io/portfolio/"><h4>My portfolio Link</h4></a>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default About