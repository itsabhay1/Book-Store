import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

function Login() {
    const navigate = useNavigate()
    const [_, setAuthUser] = useAuth()
    const [loading, setLoading] = useState(false)

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

        setLoading(true)
        try {
            const res = await axios.post("/api/v1/user/login", userInfo)
            if (res.data?.user) {
                setAuthUser(res.data.user)
                localStorage.setItem("Users", JSON.stringify(res.data.user))
                toast.success('Login Successfully!')
                document.getElementById("my_modal_3")?.close()
                navigate("/") // Navigate to home
            }
        } catch (err) {
            if (err.response?.data?.message) {
                toast.error("Error: " + err.response.data.message)
            } else {
                toast.error("Login failed.")
            }
        } finally {
            setLoading(false)
        }
    }

    const closeModal = () => {
        const modal = document.getElementById("my_modal_3")
        if (modal) {
            modal.close()
        }
        navigate("/") // Navigate home on close too
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
                            {errors.email && (
                                <span className="text-red-500 text-sm">Email is required</span>
                            )}
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
                            {errors.password && (
                                <span className="text-red-500 text-sm">Password is required</span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center mt-6 space-y-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 disabled:opacity-50"
                            >
                                {loading ? "Logging in..." : "Login"}
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
