import React, { useEffect } from 'react'
import "./AboutServices.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'
import plumbing from "../assets/plumbing.jpeg"
import electrical from "../assets/electrical.jpeg"
import washroom from "../assets/washroom.jpeg"
import house from "../assets/house.jpg"
import security from "../assets/security.jpeg"
import kitchen from "../assets/kitchen.jpg"
import remodal from "../assets/remodal.jpeg"

const AboutServices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);
  return (
    <div className='about-sevices-box'>
      <div className='About-services'>
        <div className='About-services-content'>
          <h2 className='About-services-heading' data-aos="fade-left">Transforming Spaces Transforming Lives</h2>
          <div className='About-services-box' data-aos="fade-right">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={plumbing} alt="plumber"></img>
              </div>
              <h5 className='About-services-title'>Plumbing</h5>
              <p className='About-services-content'>Faucet change - Fixing leaks,Toilet Repairs and Replacement, Bidet installs - Dishwasher installs, - Upgrading old copper pipes to pex, - New shut-off valves, etc</p>
            </div>
          </div>
          <div className='About-services-box' data-aos="fade-left">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={electrical} alt="electrical"></img>
              </div>
              <h5 className='About-services-title'>Electrical</h5>
              <p className='About-services-content'>Light fictures - Power outlets - Switches, Decoration lights - TV Wall Mounting(hiiden wires)</p>
            </div>
          </div>
          <div className='About-services-box' data-aos="fade-right">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={washroom} alt="washroom"></img>
              </div>
              <h5 className='About-services-title'>Washroom Renovation</h5>
              <p className='About-services-content'>Tiling - WaterProofing, - New vanities, New mirrors - New accessories - Shower doors, Upgrading bath tubs to walk-in-showers</p>
            </div>
          </div>
          <div className='About-services-box' data-aos="fade-left">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={house} alt="house"></img>
              </div>
              <h5 className='About-services-title'>HOUSE UPGRADES</h5>
              <p className='About-services-content'>Building Decks/Patio or upgrading it - Drywall Repair -
                Painting walls
                Lock Changes - Door repairs and New Installs, Tenant Move in and out repairs, Cabinet Repairs, Appliance Installs, Junk Removal, Laminate and Tiles Ike Fixtures/Furniture Gazebo and Shed Installs, Kitchen and Washroom Caulking,Re-Grouting,Baseboards</p>
            </div>
          </div>
          <div className='About-services-box' data-aos="fade-right">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={security} alt="security"></img>
              </div>
              <h5 className='About-services-title'>SECURITY SYSTEM</h5>
              <p className='About-services-content'>
                security and protection system, any of various means or devices to guard persons and property against a broad range of hazards, including crime, fire, accidents, espionage, sabotage, subversion, and attack.</p>
            </div>
          </div>
          <div className='About-services-box' data-aos="fade-left">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={kitchen} alt="kitchen"></img>
              </div>
              <h5 className='About-services-title'>kitchen renovation</h5>
              <p className='About-services-content'>A kitchen is the heart of any home, and we understand the significance of creating a space that is not only functional but also visually appealing. Our kitchen renovation services are tailored to your specific requirements, whether it's a modern, sleek design or a cozy, traditional feel.
              </p>
            </div>
          </div>
          <div className='About-services-box' data-aos="fade-right">
            <div className='About-services-line'></div>
            <div className='About-services-box-content'>
              {/* image */}
              <div className='About-services-image'>
                <img src={remodal} alt="remodal"></img>
              </div>
              <h5 className='About-services-title'>full remodels</h5>
              <p className='About-services-content'>At our construction company, we offer comprehensive full remodel services that encompass every aspect of your home. Whether you want to transform a single room or give your entire property a fresh new look, we have the expertise and resources to handle it all. From concept to completion, we work closely with our clients to understand their vision and preferences, ensuring that the final result aligns perfectly with their needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutServices