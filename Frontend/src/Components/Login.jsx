import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle form data
        document.getElementById("my_modal_3").close(); // Optionally close the modal after successful submission
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark dark:bg-slate-800">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span> <br />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="outline-none border rounded w-80 px-3 py-1 dark:text-slate-600"
                                {...register("email", { required: "Email is required" })}
                            /><br />
                            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </div>
                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span> <br />
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="outline-none border rounded w-80 px-3 py-1 dark:text-slate-600"
                                {...register("password", { required: "Password is required" })}
                            /><br />
                            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                        </div>
                        {/* Login Button */}
                        <div className="flex justify-between mt-4">
                            <button className="bg-green-400 px-3 py-1 rounded-md hover:bg-green-500 duration-200">
                                Login
                            </button>
                            <p>
                                Not Registered?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;

