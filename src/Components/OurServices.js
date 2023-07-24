import React, { useEffect } from 'react'
import "./OurServices.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'

const OurServices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <div className="our-services-section">
      <p className="services-text" data-aos="zoom-in">Our Services</p>
      <div className="horizontal-ruler-2" data-aos="fade-right"></div>
      <p className="service-type" data-aos="fade-right">Plumbing</p>
      <div className="horizontal-ruler-2" data-aos="fade-right"></div>
      <p className="service-type" data-aos="fade-right">Electrical</p>
      <div className="horizontal-ruler-2" data-aos="fade-right"></div>
      <p className="service-type" data-aos="fade-right">Security System</p>
      <div className="horizontal-ruler-2" data-aos="fade-right"></div>
      <p className="service-type" data-aos="fade-right">Camera Installation</p>
      <div className="horizontal-ruler-2" data-aos="fade-right"></div>
      <p className="service-type" data-aos="fade-right">Washroom Renovation</p>
      <div className="horizontal-ruler-2" data-aos="fade-right"></div>
      <p className="service-type" data-aos="fade-right">General House Repairs</p>
    </div>
  );
};

export default OurServices;
