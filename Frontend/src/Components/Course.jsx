import React from 'react';
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 px-4 mx-auto '>
        <div className='pt-36 text-center justify-center items-center dark:bg-slate-900 dark:text-white'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-green-600'>here! :)</span> </h1>
          <p className='mt-12'>Discover a world of endless stories, captivating characters, and thrilling adventures. Immerse yourself in a vast collection of eBooks, meticulously curated for your reading pleasure. From classic masterpieces to contemporary bestsellers, our digital library has something for everyone. Whether you're seeking a quick escape or a deep intellectual dive, you'll find it here. So, sit back, relax, and let the magic of reading transport you to new worlds and ignite your imagination.</p>
          <Link to={"/"}>
            <button className='bg-green-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-green-600'>Back</button>
          </Link>
        </div>


        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course;
