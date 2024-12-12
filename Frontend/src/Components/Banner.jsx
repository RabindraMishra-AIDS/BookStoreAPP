import React from 'react';
import Baner from "../../public/Baner.png";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container md:px-20 px-4 mx-auto flex flex-col md:flex-row my-10 ">
                <div className="w-full md:w-1/2 mt-12 md:mt-36">
                    <div className='space-y-12 order-2'>
                        <h1 className="text-4xl font-bold">Welcome to BookMania,<br /> <span className='text-green-600'>Keep Learning Keep Growing!!</span></h1>
                        <p className='text-xl'>Discover a vast collection of eBooks on various topics. From fiction and non-fiction to academic texts and children's stories, our library offers something for everyone. Enjoy reading on your favorite device, anytime, anywhere.</p>
                        {/* ---------------------------------email---------------------------------- */}
                        <label className=" border-4 border-green-200 p-2 h-14 rounded-md  flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-30 -z-10 ">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white " placeholder="Email for Login" />
                        </label>
                    </div>
                    <button className="h-14 rounded-md p-3 mt-8 px-8 text-xl bg-green-400">Submit</button>
                </div>
                <div className=" order-1 w-full md:w-1/2 dark:bg-slate-900 dark:opacity-90">
                <img src={Baner} alt="Book Image" className='h-92 w-92 ml-20 '/>
                </div>
            </div>
        </>
    )
}

export default Banner
