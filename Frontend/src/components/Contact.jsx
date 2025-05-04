import React from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    alert("Thank you for contacting us!")
    reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <label className="label">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full"
            {...register("subject")}
          />
        </div>

        {/* Message */}
        <div>
          <label className="label">Message</label>
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered w-full"
            rows={4}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn bg-pink-500 hover:bg-pink-700 text-white px-6">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
