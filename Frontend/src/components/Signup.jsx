import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();
  const [_, setAuthUser] = useAuth(); // Only need setAuthUser here

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("/api/v1/user/signup", userInfo);
      if (res.data?.user) {
        toast.success('Registered Successfully!');
        setAuthUser(res.data.user); // ✅ update context
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // ✅ store user
        navigate("/"); // ✅ redirect to home (or use "/course" if needed)
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      {/* Signup Form */}
      {!showLogin && (
        <div className="border-[2px] shadow-md p-6 rounded-md w-[400px] bg-slate-900 opacity-95 text-white relative">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black text-lg hover:text-pink-400">
            ✕
          </Link>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-2xl text-center mb-6">Sign Up</h3>

            {/* Name */}
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder='Enter your full name'
                className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-pink-500'
                {...register("fullName", { required: "Name is required" })}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder='Enter your email'
                className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-pink-500'
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Enter a valid email"
                  }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder='Enter your password'
                className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-pink-500'
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-pink-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-pink-700 transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>

              <p className="text-sm text-white-700">
                Already registered?{' '}
                <button
                  type="button"
                  className="underline text-pink-500 hover:text-pink-400"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      )}
      <Login />
    </div>
  );
}

export default Signup;
