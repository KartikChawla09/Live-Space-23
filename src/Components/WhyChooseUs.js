import React, { useEffect } from 'react'
import "./WhyChooseUs.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'

const WhyChooseUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);
    return (
        <div>
            <div className='Why-choose-us'>
                <h2 className='why-choose-us-heading' data-aos="fade-right">
                    Why Choose LiveSpace?
                    <div className='why-choose-us-up-line'></div>
                </h2>
                <div className='why-choose-us-content'>
                    <div className='why-choose-us-box' data-aos="fade-left">
                        <h4 className='why-choose-us-box-header'>
                            Exceptional Customer Services
                        </h4>
                        <p className='why-choose-us-text'>
                            Our team of experts is dedicated to providing exceptional customer service. We work closely with you throughout the design and construction process to ensure that your project meets your expectations and is completed on time and within budget.
                        </p>
                        <div className='why-choose-us-box-line'></div>
                    </div>
                    <div className='why-choose-us-box' data-aos="fade-left">
                        <h4 className='why-choose-us-box-header'>
                            Innovative Designs
                        </h4>
                        <p className='why-choose-us-text'>
                            Our team of passionate architects and designers are constantly pushing the boundaries of creativity to create spaces that inspire and delight. From the moment you step inside, you will be captivated by the seamless integration of sleek lines, open layouts, and innovative use of materials. Every corner exudes elegance and sophistication, inviting you to experience a harmonious balance between form and function.
                        </p>
                        <div className='why-choose-us-box-line'></div>
                    </div>
                    <div className='why-choose-us-box' data-aos="fade-left">
                        <h4 className='why-choose-us-box-header'>
                            Wide Range of Services
                        </h4>
                        <p className='why-choose-us-text'>
                            From the moment you choose us, our dedicated team is committed to providing you with personalized attention and care. Our range of services starts with expert guidance during the home selection process. We understand that every individual has unique preferences and requirements, and our experienced staff will work closely with you to find the perfect design that suits your lifestyle.
                        </p>
                        <div className='why-choose-us-box-line'></div>
                    </div>
                    <div className='why-choose-us-box' data-aos="fade-left">
                        <h4 className='why-choose-us-box-header'>
                            Experienced Team
                        </h4>
                        <p className='why-choose-us-text'>
                            When it comes to transforming your property into the space of your dreams, choosing an experienced team is paramount, and that's precisely what sets us apart as a leading renovation company. With a wealth of expertise and a proven track record of successful projects, our experienced team is dedicated to turning your renovation vision into a stunning reality.
                        </p>
                        <div className='why-choose-us-box-line'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs