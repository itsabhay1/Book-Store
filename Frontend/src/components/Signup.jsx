import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password
    }

    try {
      const res = await axios.post("/api/v1/user/signup", userInfo)
      if (res.data) {
        toast.success('Registered Sucessfully!');
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message)
      }
    } finally {
      setLoading(false)
    }
  };

  return (
    <div
      className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className="border-[2px] shadow-md p-5 rounded-md w-[400px] bg-white bg-opacity-90 relative">

        {/* Close button */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </Link>

        {/* Main Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg text-center">Sign Up</h3>

          {/* Name Field */}
          <div className='mt-4 space-y-2'>
            <div>Name</div>
            <input
              type="text"
              placeholder='Enter your fullname'
              className='w-full py-2 px-3 border rounded-md outline-none'
              {...register("fullName", { required: "Name is required" })}
            />
            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
          </div>

          {/* Email Field */}
          <div className='mt-4 space-y-2'>
            <div>Email</div>
            <input
              type="email"
              placeholder='Enter your email'
              className='w-full py-2 px-3 border rounded-md outline-none'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email"
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div className='mt-4 space-y-2'>
            <div>Password</div>
            <input
              type="password"
              placeholder='Enter your password'
              className='w-full py-2 px-3 border rounded-md outline-none'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Submit + Login Trigger */}
          <div className="flex flex-col items-center mt-6 space-y-4">
            <button
              type="submit"
              disabled={loading}
              className={`bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="text-sm">
              Registered?{' '}
              <button
                type="button"
                className="underline text-blue-500"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
      <Login />
    </div>
  )
}

export default Signup
