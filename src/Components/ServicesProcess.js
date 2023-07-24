import React, { useEffect } from 'react'
import "./ServicesProcess.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'

const ServicesProcess = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className='process-content-box'>
            <h2 className='process-heading' data-aos="fade-right">Our Process</h2>
            <div className='process-line1'>
                <div className='process-blocks1-2'>
                    <div className='process-blocks'>
                        <div className='process-block' data-aos="zoom-in">
                            <p className='process-no'>01</p>
                            <p className='process-block-heading'>Initial Consultation</p>
                            <p className='process-block-description'>We'll start by scheduling an initial consultation to discuss your needs and preferences. During this meeting, we'll gather information about your project and develop an understanding of your design style and budget.</p>
                        </div>
                        <div className='process-block' data-aos="zoom-in">
                            <p className='process-no'>02</p>
                            <p className='process-block-heading'>Design Concept</p>
                            <p className='process-block-description'>Based on the information gathered during the initial consultation, we'll develop a design concept and present it to you for feedback. We'll work with you to refine the design until it meets your expectations.</p>
                        </div>
                        <div className='process-block' data-aos="zoom-in">
                            <p className='process-no'>03</p>
                            <p className='process-block-heading'>Construction</p>
                            <p className='process-block-description'>Once the design is finalized, we'll move on to the construction phase. We'll manage the entire construction process, from selecting contractors to overseeing the work, to ensure that your project is completed on time and within budget.</p>
                        </div>
                    </div>
                    <div className='process-block-2'>
                        <div className='process-block line2-left' data-aos="zoom-in">
                            <p className='process-no'>04</p>
                            <p className='process-block-heading'>Final Walk-Through</p>
                            <p className='process-block-description'>Once the construction is complete, we'll schedule a final walk-through to ensure that everything is in order and meets your expectations. We'll address any concerns or issues and make sure that you're satisfied with the final result.</p>
                        </div>
                        <div className='process-block line2-right' data-aos="zoom-in">
                            <p className='process-no'>05</p>
                            <p className='process-block-heading'>Follow-Up</p>
                            <p className='process-block-description'>After the final walk-through, we'll follow up with you to ensure that you're completely satisfied with the project. We'll also provide you with any necessary information and resources to help you maintain and care for your new space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesProcess