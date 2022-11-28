// import React, { useContext } from 'react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';




const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [signUpError, setSignUpError] = useState('');

    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }


    const handleSignUp = (data) => {

        console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('user Created successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                        navigate('/')
                    })
                    .catch(err => console.log(err))

            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })


        const saveUser = (name, email) => {
            const user = { name, email };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // getUserToken(email);
                    setCreatedUserEmail(email)

                })
        }


    }


    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-4xl text-center'>Signup</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <label htmlFor="field-wind">
                            <input
                                {...register("weather")}
                                type="radio"
                                value="wind"
                                id="field-wind"

                            />
                            Buyer
                        </label>
                        <label htmlFor="field-sun">
                            <input
                                {...register("weather")}
                                type="radio"
                                value="sun"
                                id="field-sun"
                            />
                            seller
                        </label>




                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: "Email Address is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is required",

                                minLength: { value: 6, message: 'password must be 6 charecter or more' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong' },

                            })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label"> <span className="label-text">Forgot password</span></label>
                        </div>
                        <input className='btn btn-accent w-full' value='signup' type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p>Already have an account<Link className='text-secondary text-bold' to='/login'>...Please login</Link></p>
                    <div className="divider">OR</div>
                    {/* <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}

                </div>
            </div>
        </div>
    );
};

export default SignUp;