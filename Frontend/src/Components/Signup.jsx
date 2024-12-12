import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
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
          <div className="modal-box dark:bg-slate-800">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>UserName</span> <br />
                <input
                  type="text"
                  placeholder='Enter Your name'
                  className='outline-none border rounded w-80 px-3 py-1 '
                  {...register("UserName", { required: "UserName is required" })}
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
                <span>Password</span> <br />
                <input
                  type="password"
                  placeholder='Enter Your Password'
                  className='outline-none border rounded w-80 px-3 py-1 '
                  {...register("password", { required: "Password is required" })}
                /><br/>
                {errors.password && (
                  <span className="text-sm text-red-500">{errors.password.message}</span>
                )}
              </div>

              {/* Signup Button */}
              <div className='flex justify-between mt-4'>
                <button
                  type="submit"
                  className='bg-green-400 px-3 py-1 rounded-md hover:bg-green-500 duration-200'>
                  Signup
                </button>
                <p>
                  Have Account?{" "}
                  <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById("my_modal_3").showModal()}>
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

