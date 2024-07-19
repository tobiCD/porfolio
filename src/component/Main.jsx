import React from 'react';
import img from '../assets/image/IMG_20211226_124455_029.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter } from "react-icons/fa6";

import {   FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';

const Main = () => {
  return (
    <>
    <div id='main'>
    <div className='bg-fixed w-screen h-screen' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: ' center' }}/>
    {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={img} alt="" /> */}
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Khoi Chu</h1>
          <h2 className='flex sm:text-3xl text-2xl  pt-4 text-gray-800'>I'm a
            <TypeAnimation
              sequence={[
                'BackEnd Developer',
                1000,
                'Coder',
                2000,
                'Tech Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-x-[200px] w-full'>
                <a href="https://x.com/CHungKhi7" className=' m-2 p-4 cursor-pointer  hover:scale-110 ease-in duration-300'>
                    <FaXTwitter  size={20}  />
                </a>
                <a href="https://www.facebook.com/share/qSGDgLmQbKXJvPT2/?mibextid=LQQJ4d" className=' m-2 p-4 cursor-pointer  hover:scale-110 ease-in duration-300'>
                <FaFacebookF size={20} />
                </a>
                <a href="https://github.com/tobiCD" className=' m-2 p-4 cursor-pointer  hover:scale-110 ease-in duration-300'>
                <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-kh%C3%B4i-chu-44626125b/" className=' m-2 p-4 cursor-pointer  hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={20}  />
                </a>
          </div>
        </div>
      </div>
    </div>
    <div className='sticky top-0'>

    </div>
    </>
  );
}

export default Main;
