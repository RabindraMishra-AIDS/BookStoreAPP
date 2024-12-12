import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cont from '../Components/Cont';


function Contact() {
  return (
<>
<Navbar/>
<div className='min-h-screen dark:bg-slate-900 dark:text-white'>
<Cont/>
</div>
<Footer/>
</>
  )
}

export default Contact;
