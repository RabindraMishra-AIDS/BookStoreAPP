import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import Contact from './contact/contact';


function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white' >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/course' element={<Courses />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>

    </>
  );
}

export default App;

