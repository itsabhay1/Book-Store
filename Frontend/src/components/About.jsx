import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-base-200 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-pink-500">About Us</h1>

        <p className="text-lg mb-4 text-gray-700">
          Welcome to <span className="font-semibold">BookNest</span> — your one-stop destination for discovering, buying, and exploring books across every genre imaginable. Whether you’re a fiction fanatic, a history buff, or someone who just loves the smell of a fresh new book, we’ve got something for everyone.
        </p>

        <p className="text-lg mb-4 text-gray-700">
          Our mission is to create an inclusive online bookstore experience that connects readers with the stories and knowledge they’re searching for. We believe in the power of books to inspire, educate, and entertain — and we’re here to make that experience seamless and enjoyable.
        </p>

        <p className="text-lg mb-4 text-gray-700">
          As a fullstack project, this website is built with modern technologies including React, Node.js, Express, and MongoDB — providing a fast, secure, and responsive shopping experience.
        </p>

        <p className="text-lg text-gray-700">
          Thank you for visiting our bookstore. Happy reading!
        </p>
      </div>
    </div>
  )
}

export default About
