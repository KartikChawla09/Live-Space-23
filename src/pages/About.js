import React from 'react'
import "./About.css"
import Navbar from '../Components/Navbar'
import AboutHeading from '../Components/AboutHeading'
import AboutServices from '../Components/AboutServices'
import WhyChooseUs from '../Components/WhyChooseUs'
import AboutOurTeam from '../Components/AboutOurTeam'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutHeading></AboutHeading>
            <AboutServices></AboutServices>
            <WhyChooseUs></WhyChooseUs>
            <AboutOurTeam></AboutOurTeam>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}

export default About