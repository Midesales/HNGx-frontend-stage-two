import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Moviedetails from './components/moviedetails';
import Home from './components/home'



function App() {
    return(
      
        
        <div className='w-full h-screen bg-[#EBEBEB]'>
         <Routes>
            <Route path="/movie/:id" element={<Moviedetails />} /> 
            <Route path = '/' element = {<Home />} />
        </Routes>
        
      </div>
      
      
    )
      
     
   
    
    
  
}

export default App;
