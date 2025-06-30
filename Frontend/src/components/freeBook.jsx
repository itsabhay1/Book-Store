import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import axios from "axios"
import Cards from './Cards'


function FreeBook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-nine-lac.vercel.app/api/v1/book")
        setBook(res.data.filter((data) => data.category === "Free"))
      } catch (error) {
        console.log(error);

      }
    }
    getBook();
  }, []);
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quasi quos esse magnam libero nihil unde iure, necessitatibus blanditiis, modi commodi temporibus optio. Corporis quam ullam in sed odit!</p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item)=>(
              <Cards item = {item} key = {item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>

  )
}

export default FreeBook
