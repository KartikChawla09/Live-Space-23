import React, { useEffect } from "react";
import { useState } from "react";
import "./Clients.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { duration } from "@mui/material";
import client3 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client1 from "../assets/client3.jpg";

const reviews = [
  {
    id: 1,
    text: "I hired LiveSpace to design and build my dream home, and I could not be happier with the result. From the initial consultation to the final walk-through, the LiveSpace team was professional, attentive, and a pleasure to work with. They took the time to listen to my needs and preferences, and they brought their expertise to the table to create a home that is not only beautiful but also functional and sustainable. I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of a kind. I highly recommend Archies for anyone who is looking for a top-notch architecture and design firm.",
    name: "Dereck Lawson",
    image: client1,
  },
  {
    id: 2,
    text: "I hired LiveSpace to handle the plumbing and electrical work in my home renovation, and I must say they exceeded all my expectations. From the outset, the team displayed a high level of professionalism and expertise in their field. They carefully assessed the existing systems and proposed efficient and cost-effective solutions to address my needs. Not only did they complete the project on time, but they also maintained excellent communication and kept me informed at every step. Their friendly and approachable attitude made the entire experience smooth and stress-free.",
    name: "Mark Lewis",
    image: client2,
  },
  {
    id: 3,
    text: "When it came to enhancing the security of my property, I turned to LiveSpace for their expertise in security and camera installation. They proved to be an exceptional choice from start to finish. Their knowledgeable team conducted a thorough assessment of my property's security needs and designed a tailored plan to address potential vulnerabilities. Throughout the installation process, LiveSpace exhibited a high level of professionalism and attention to detail. They meticulously installed state-of-the-art security cameras and systems, providing me with peace of mind and confidence in the safety of my home.",
    name: "Michael Thompson",
    image: client3,
  },
  // Add more reviews here
];

const Clients = () => {

  const [activeReview, setActiveReview] = useState(0);
  const [isActive, setIsActive] = useState(false);


  const handleNext = () => {
    setActiveReview((prevIndex) => (prevIndex + 1) % reviews.length)
    setIsActive(current => !current);

    const timer = setTimeout(() => setIsActive(current => !current), 1000);
  };

  const handlePrev = () => {
    setActiveReview((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setIsActive(current => !current);

    const timer = setTimeout(() => setIsActive(current => !current), 1000);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="client-main-page" id="testimonials">
      {/* <div className="horizontal-ruler"></div> */}
      <div className="client-main-text-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="85"
          viewBox="0 0 61 85"
          fill="none"
        >
          <path
            d="M33.1811 83.0972L59.7227 56.5555C60.4134 55.8404 60.7956 54.8827 60.787 53.8885C60.7783 52.8943 60.3796 51.9433 59.6766 51.2403C58.9735 50.5373 58.0226 50.1385 57.0284 50.1299C56.0342 50.1213 55.0764 50.5035 54.3613 51.1941L34.292 71.2634L34.292 4.58317C34.292 3.57756 33.8926 2.61313 33.1815 1.90206C32.4704 1.19098 31.506 0.791503 30.5004 0.791503C29.4948 0.791503 28.5303 1.19098 27.8193 1.90206C27.1082 2.61313 26.7087 3.57756 26.7087 4.58317L26.7087 71.2634L6.63941 51.1941C6.28964 50.832 5.87125 50.5431 5.40865 50.3444C4.94605 50.1457 4.44851 50.0411 3.94505 50.0367C3.44159 50.0323 2.94232 50.1283 2.47634 50.3189C2.01035 50.5096 1.587 50.7911 1.23099 51.1471C0.874983 51.5031 0.593439 51.9265 0.402788 52.3925C0.212141 52.8585 0.116205 53.3577 0.12058 53.8612C0.124956 54.3646 0.229558 54.8622 0.428274 55.3248C0.626993 55.7874 0.915845 56.2058 1.27799 56.5555L27.8197 83.0972C28.5307 83.8081 29.4949 84.2074 30.5004 84.2074C31.5058 84.2074 32.47 83.8081 33.1811 83.0972Z"
            fill="#E8E3DF"
          />
        </svg>
        <p className="client-main-text" data-aos="zoom-in">
          What Our Clients Say
        </p>
      </div>
      <p className="toes" data-aos="zoom-in">
        Testimonials on our exceptional service
      </p>
      <div className="horizontal-ruler"></div>
      <div className="customer-review-carousel">
        <div className={isActive ? 'slide-out-right client-text-box' : 'client-text-box'}>
          <div className="client-text-box-photo" data-aos="zoom-in">
            <img src={reviews[activeReview].image} width="100%" height="100%" />
          </div>
          <div className="client-text-box-content" data-aos="zoom-in">
            <p className="client-text-subheading">
              {reviews[activeReview].text}
            </p>
            <p className="client-text-name">{reviews[activeReview].name}</p>
          </div>
        </div>
        <div className="carousel-navigation" data-aos="zoom-in">
          <button className="prev-bt" onClick={handlePrev}>
            Previous
          </button>
          <button className="next-bt" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
      <div className="horizontal-ruler"></div>
    </div>
  );
};

export default Clients;
