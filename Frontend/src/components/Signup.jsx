import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div
      className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className="border-[2px] shadow-md p-5 rounded-md w-[400px] bg-white bg-opacity-90 relative">

        {/* Close button - not inside any form */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </Link>

        {/* Single form only */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg text-center">Sign Up</h3>

          {/* Name Field */}
          <div className='mt-4 space-y-2'>
            <div>Name</div>
            <input
              type="text"
              placeholder='Enter your fullname'
              className='w-full py-2 px-3 border rounded-md outline-none'
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Submit + Login Modal Trigger */}
          <div className="flex flex-col items-center mt-6 space-y-4">
            <button type="submit" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
              Sign Up
            </button>

            <p className="text-sm">
              Registered?{' '}
              <button
                type="button"
                className="underline text-blue-500"
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </button>
            </p>

            <Login />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
