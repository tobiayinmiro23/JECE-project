import './App.css';
import { useState } from 'react';
import Container from './Container';
import About from './About';

function App() {
  const [page, setpage] = useState('home')

  const handlePage=(param)=>{
    setpage(param)
  }
  return (
    <div>
                {page === 'home' && <Container handlePage={handlePage}/>}
                {page === 'about' && <About handlePage={handlePage} />}
    </div>
    
  );

}

export default App;
