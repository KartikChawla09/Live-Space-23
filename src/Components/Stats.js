import React, { useEffect } from 'react'
import "./Stats.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'

const Stats = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);
  return (
    <div className="stats-main-section">
      <div className="stats-row-one">
        <div className="stats-internal-text">
          <p className="stats-main-text" data-aos="zoom-in">10+</p>
          <p className="stats-secondary-text">Years of Experience</p>
        </div>
      </div>
      <div className="stats-row-one">
        <div className="stats-internal-text remover-og">
          <p className="stats-main-text" data-aos="zoom-in">2000+</p>
          <p className="stats-secondary-text">Projects</p>
        </div>
        <div className="stats-internal-text">
          <p className="stats-main-text" data-aos="zoom-in">95%</p>
          <p className="stats-secondary-text">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
