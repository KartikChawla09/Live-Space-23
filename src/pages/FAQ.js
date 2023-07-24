import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@mui/material'

const questions = [
  {
    id: 1,
    question: "What is the design process like?",
    answer:
      "Our design process typically starts with an initial consultation to discuss your needs and preferences. From there, we develop a design concept and present it to you for feedback. Once the design is finalized, we move on to the construction phase. Throughout the process, we keep you informed and involved to ensure that the end result is exactly what you envisioned.",
  },
  {
    id: 2,
    question: "What is your approach to sustainability in design?",
    answer:
      "Our approach to sustainability in design is rooted in creating environmentally conscious and energy-efficient solutions. We strive to incorporate sustainable practices and materials into every aspect of our design process. From utilizing renewable energy sources to implementing passive design strategies, we aim to minimize the ecological footprint of our projects while maximizing their long-term efficiency and durability.",
  },
  {
    id: 3,
    question: "What types of projects do you work on?",
    answer:
      "We work on a wide range of projects, including residential, commercial, institutional, and public spaces. Our expertise extends to single-family homes, multi-unit developments, office buildings, retail spaces, educational facilities, healthcare centers, and more. We are passionate about delivering tailored architectural solutions that meet the unique needs and aspirations of our clients across diverse project types.",
  },
  {
    id: 4,
    question: "What is the timeline for a typical project?",
    answer:
      "The timeline for a typical project can vary depending on its complexity, size, and specific requirements. We believe in delivering high-quality designs while adhering to efficient project management principles. From initial concept development to construction documentation and project realization, we strive to maintain a streamlined process that ensures timely completion without compromising on design excellence. We work closely with our clients to establish realistic timelines and milestones for each project, keeping them informed and engaged throughout the entire journey.",
  },
  {
    id: 5,
    question: "How much does a project cost?",
    answer:
      "The cost of a project is influenced by numerous factors, including its scale, complexity, location, materials, and desired level of finishes. Each project is unique, and we provide tailored cost estimates based on the specific requirements and design aspirations of our clients. We believe in transparent communication and work closely with our clients to develop comprehensive project budgets. Our goal is to deliver value-driven designs that align with our clients' vision while optimizing cost-efficiency without compromising on quality or functionality.",
  },
];



const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = questions.filter((item) =>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.headingfaq} data-aos="zoom-in">How can we help you?</h2>
      <Searchbar onSearchChange={handleSearchChange} />
      <section className={styles.faq}>
        {searchResults.map((item) => (
          <Question
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </div>
  );
};

const Searchbar = (props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.onSearchChange(e);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);


  return (
    <form data-aos="zoom-in">
      <svg viewBox="0 0 512 512" width="100" title="search">
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
      </svg>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Describe your issue"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

const Question = (props) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <div className={styles.questionwrapper}>
      <div className={styles.question} data-aos="zoom-in" id={props.id}>
        <h3>{props.question}</h3>
        <button onClick={handleClick}>
          <svg
            className={isActive ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div
        className={
          isActive ? `${styles.answer} ${styles.active}` : `${styles.answer}`
        }
      >
        {props.answer}
      </div>
    </div>
  );
};

export default FAQ;
