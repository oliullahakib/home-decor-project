import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router';

const LogIn = () => {
      const [show, setShow] = useState(false)
        const handleLogIn = (e) => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log("Log In", { email, password })
        }
    return (
        <div className="hero bg-gradient-to-tl from-purple-400 via-red-200 to-blue-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">LogIn now!</h1>
                    <p className="w-80 py-6">
                        To Expolre Our All Feature!
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <form onSubmit={handleLogIn} >
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                {/* password */}
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input required name='password' type={show ? "text" : "password"} className="input" placeholder="Password" />
                                    <span className='cursor-pointer absolute top-7 right-6 text-xl ' onClick={() => setShow(!show)}>
                                        {
                                            show ? <IoMdEyeOff /> : <FaEye />
                                        }
                                    </span>
                                </div>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-gradient-to-l from-purple-300 to-orange-300 mt-4">Log In</button>
                                <p>New to our Website? Please <Link className='text-blue-400 hover:text-blue-700' to={"/register"}>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;