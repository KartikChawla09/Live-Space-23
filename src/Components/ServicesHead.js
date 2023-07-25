import React, { useEffect } from 'react'
import "./ServicesHead.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'
import Navbar from '../Components/Navbar'
import img2 from "../assets/service2.png"
import img1 from "../assets/service1.png"

const ServicesHead = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);
    return (
        <div className='services-main-box'>
            <Navbar></Navbar>
            <div className='services-box-elements' data-aos="zoom-in">
                <div className='service-image-placeholder'>
                    <div className='service-image1 kenburns-top'>
                        <img src={img2} alt="image"></img>
                    </div>
                    <div className='service-image2 kenburns-top'>
                        <img src={img1} alt="image-small"></img>
                    </div>
                </div>
                <div className='service-text-box'>
                    <h1 className='service-text-line1'>Transform</h1>
                    <h1 className='service-text-line2'>Your Space</h1>
                    <h1 className='service-text-line3'>with Us</h1>
                </div>
            </div>
            <p className='service-bottom-text'>Architecture & Interior</p>
        </div>
    )
}

export default ServicesHead