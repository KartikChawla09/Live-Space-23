import React, { useEffect } from 'react'
import "./AboutHeading.css"
import 'animate.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'
import visionImage from "../assets/aboutusVaision.png"
import Navbar from '../Components/Navbar'
const AboutHeading = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);
    return (
        <div className='about-outer-box' data-aos="zoom-in">
            <Navbar></Navbar>
            <div className='About-header-content'>
                <p className='About-text'>Our Story</p>
                <div className='About-header-text'>
                    <h1 className='About-heading-h1'>Learn About Our <div className='About-slash'> /</div></h1>
                    <h1 className='About-heading2-h1'>Vision and Values</h1>
                </div>
                <div className='About-image-placeholder'>
                    <img src={visionImage} alt="our Vision"></img>
                </div>
            </div>
        </div>
    )
}

export default AboutHeading