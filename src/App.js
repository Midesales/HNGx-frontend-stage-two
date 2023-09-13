import React, {useState} from 'react';
import { Routes, Route} from 'react-router-dom';

import Moviedetails from './components/moviedetails';
import Home from './components/home'



function App() {
    return(
      
        
        <div className='w-full h-screen bg-[#EBEBEB]'>
         <Routes>
            <Route path = '/Moviedetails/:id' element = {<Moviedetails />} />
        </Routes>
         <Routes>
            <Route path = '/' element = {<Home />} />
        </Routes>
      </div>
      
      
    )
      
     
   
    
    
  
}

export default App;
