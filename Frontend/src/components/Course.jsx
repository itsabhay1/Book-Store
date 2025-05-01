import React from 'react'
import list from "../../src/assets/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"


function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non molestias atque tempore officiis eos aspernatur qui veniam ab cum expedita nemo, tempora illum rem impedit perspiciatis officia, inventore iusto quia. Aut perferendis cupiditate asperiores beatae exercitationem libero ut molestias quisquam fuga aliquid quas amet rerum error laboriosam vitae optio adipisci, quidem autem harum? Incidunt, animi.
          </p>
          <Link to = '/'>
          <button className='mt-6 bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
