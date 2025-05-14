import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }

        try {
            const res = await axios.post("/api/v1/user/login", userInfo)
            if (res.data) {
                toast.success('Login Sucessfully!');
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))
        } catch (err) {
            if (err.response) {
                toast.error("Error: " + err.response.data.message)
            }
        }
    }

    const closeModal = () => {
        const modal = document.getElementById("my_modal_3")
        if (modal) {
            modal.close()
        }
        navigate("/")
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        <h3 className="font-bold text-lg text-center">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <div>Email</div>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-full py-2 px-3 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <div>Password</div>
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-full py-2 px-3 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center mt-6 space-y-4">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
                            >
                                Login
                            </button>
                            <p className="text-sm">
                                Not registered?{' '}
                                <Link to="/signup" className="underline text-blue-500">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
