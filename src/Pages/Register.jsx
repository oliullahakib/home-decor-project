import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Register = () => {
    const [show, setShow] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked
        if(!terms){
            MySwal.fire("Please Accepet Our Terms and Conditions.")
        }
        console.log("register", { email, password, name, photo,terms })
    }
    return (
        <div className="hero bg-gradient-to-tl from-blue-400 via-amber-200 to-green-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="w-80 py-6">
                        To Expolre Our All Feature!
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <form onSubmit={handleRegister} >
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input required name='name' type="text" className="input" placeholder="Name" />
                                {/* photo */}
                                <label className="label">Photo </label>
                                <input name='photo' type="text" className="input" placeholder="Photo URL" />
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
                                {/* term & conditions */}
                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                    <legend className="fieldset-legend">Terms & Conditions</legend>
                                    <label className="label">
                                        <input name='terms'  type="checkbox" className="checkbox" />
                                       Check me
                                    </label>
                                </fieldset>

                                <button className="btn bg-gradient-to-l from-blue-300 to-orange-300 mt-4">Register</button>
                                <p>Already Have an Account? Please <Link className='text-blue-400 hover:text-blue-700' to={"/logIn"}>Log In</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;