import React from 'react'
import "./Services.css"
import Navbar from '../Components/Navbar'
import ServicesHead from '../Components/ServicesHead'
import ServicesProcess from '../Components/ServicesProcess'
import AboutServices from '../Components/AboutServices'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ServicesHead></ServicesHead>
            <ServicesProcess></ServicesProcess>
            <AboutServices></AboutServices>
            {/* <NewsLetter></NewsLetter> */}
            <Footer></Footer>
        </div>
    )
}

export default Services