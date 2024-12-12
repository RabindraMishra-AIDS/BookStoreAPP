import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
  const FilterData = list.filter((data) => data.Category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className='max-w-screen-2xl container md:px-20 px-4 mx-auto'>
        <div>
          <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
          <p>Here are some of our free books and courses that you can start reading & enjoying.</p>
        </div>
      <div>
      <Slider {...settings}>
        {FilterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook;
