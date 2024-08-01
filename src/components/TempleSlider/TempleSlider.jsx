import React from 'react';
import Slider from 'react-slick';
import TempleCard from './TempleCard';
// import { temples } from '../data/temples'; // Import the temple data

 const temples = [
    {
      name: "Somnath Temple",
      location: "Prabhas Patan, Saurashtra, Gujarat",
      time: "6:00 AM - 9:00 PM",
      prashad: "Basmati Rice, Coconut",
      importantDates: ["Maha Shivaratri", "Navaratri"],
      image: "/images/somnath.png" // Image path
    },
    {
      name: "Mallikarjuna Temple",
      location: "Srisailam, Andhra Pradesh",
      time: "6:00 AM - 8:00 PM",
      prashad: "Rice and Jaggery",
      importantDates: ["Maha Shivaratri", "Srisailam Brahmotsavam"],
      image: "/images/mallikarjuna.png" // Image path
    },
    {
      name: "Mahakaleshwar Temple",
      location: "Ujjain, Madhya Pradesh",
      time: "4:00 AM - 11:00 PM",
      prashad: "Ladoo, Milk",
      importantDates: ["Mahashivaratri", "Bhasma Aarti"],
      image: "/images/mahakaleshwar.png" // Image path
    },
    {
      name: "Omkareshwar Temple",
      location: "Khandwa, Madhya Pradesh",
      time: "6:00 AM - 8:00 PM",
      prashad: "Chana Dal, Rice",
      importantDates: ["Maha Shivaratri", "Navaratri"],
      image: "/images/omkreshwar.png" // Image path
    },
    {
      name: "Kedarnath Temple",
      location: "Kedarnath, Uttarakhand",
      time: "4:00 AM - 9:00 PM",
      prashad: "Kedarnath Prashad",
      importantDates: ["Kedarnath Yatra", "Maha Shivaratri"],
      image: "/images/kedarnath.png" // Image path
    },
];  

// Slick Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TempleSlider = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">12 JYOTIRLINGAS</h1>
        <Slider {...sliderSettings}>
          {temples.map((temple, index) => (
            <TempleCard key={index} temple={temple} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TempleSlider;
