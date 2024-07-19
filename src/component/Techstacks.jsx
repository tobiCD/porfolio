"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "../constants/SkillsData";

const Techstack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();
  console.log(TechStackData)

  return (
    <Fragment>
      <div
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden '
        id='skills'
        ref={techStackRef}
      >
        <h2 className=' text-4xl font-bold text-center text-[#001b5e] p-4 flex justify-center items-center gap-6'>
          <FaLaptopCode /> Tech Stack
        </h2>

     
        <div
          className='pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5'
          ref={techBoxesRef}
        >
          {TechStackData.map((tech) => (
            <div
              className=' shadow-lg transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border  dark:border-white border-solid rounded flex flex-col gap-3 items-center'
              key={tech.name}
            >
              <p>{tech.icon}</p>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Techstack;