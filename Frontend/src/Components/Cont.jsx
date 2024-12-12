import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Cont() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle form submission
    };
    return (
        <>
            <div className='h-screen justify-center items-center flex'>
                <div className='w-[600px] '>
                    <div className="modal-box dark:bg-slate-800 dark:text-slate-500">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link
                                to={"/"}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg">Contact</h3>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span> <br />
                                <input
                                    type="text"
                                    placeholder='Enter Your name'
                                    className='outline-none border rounded w-80 px-3 py-1 '
                                    {...register("UserName", { required: "Name is required" })}
                                />
                                <br />
                                {errors.UserName && (
                                    <span className="text-sm text-red-500">{errors.UserName.message}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span> <br />
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    className='outline-none border rounded w-80 px-3 py-1 '
                                    {...register("email", { required: "Email is required" })}
                                />
                                <br />
                                {errors.email && (
                                    <span className="text-sm text-red-500">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Message</span> <br />
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    rows="4"
                                    placeholder="Enter your message here"
                                />

                                <br />
                                {errors.password && (
                                    <span className="text-sm text-red-500">{errors.message}</span>
                                )}
                            </div>

                            {/* Signup Button */}
                            <div className='flex justify-between mt-4'>
                                <button
                                    type="submit"
                                    className='bg-green-400 px-3 py-1 rounded-md hover:bg-green-500 duration-200'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cont;
