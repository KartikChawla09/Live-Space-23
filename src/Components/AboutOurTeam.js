import React, { useEffect } from 'react'
import "./AboutOurTeam.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'

const AboutOurTeam = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);
    return (
        <div>
            <div className='About-team-box'>
                <div className='about-team-content'>
                    <h2 className='about-team-head' data-aos="fade-left">About Our Team</h2>
                    <ul className='about-team-text' data-aos="fade-right">
                        <li><p>At our construction company, our employees and workers form the backbone of our success and are the heart of our business. Comprising a tight-knit and dedicated team, they are not just highly experienced and skilled professionals but also embody the spirit of hard work and a sense of camaraderie that makes us feel like a family.</p></li>
                        <li><p>Our team members bring a wealth of experience to the table, having worked on a diverse range of projects in the construction and remodeling industry</p></li>
                        <li><p>From our designers and architects to our construction crew and craftsmen, our employees are masters of their respective trades. They stay updated with the latest industry trends and techniques, incorporating innovative approaches to deliver exceptional results</p></li>
                        <li><p>Our team's philosophy revolves around putting our clients first. They listen attentively to our clients' ideas, concerns, and preferences, tailoring their approach to match individual needs.</p></li>
                        <li><p>In a dynamic industry like construction and remodeling, our team understands the importance of continuous growth and learning.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutOurTeam