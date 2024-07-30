import React from 'react'
import ProjectItem from './ProjectItem'
import img1 from '../assets/CMC-glitch.png'
import img2 from '../assets/ketqua.PNG'
import img3 from '../assets/Screenshot_2024-04-12_123334.88dfb5a59cd2.png'
import img4 from '../assets/Capture.PNG'
const href2 = 'https://github.com/tobiCD/LSTM-ANKHE'
const href1 = 'https://github.com/tobiCD/JWT_backEnd'
const href3 = 'https://github.com/tobiCD/Blog-APP'
const href4 = 'https://github.com/tobiCD/JobSearching'

const Project=()=>{
return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'
    >
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Projects</h1>
        <p className='text-center py-8'>
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem image={img1} href={href1} title='User Management -NodeJS'/>
            <ProjectItem image={img2} href={href2} title ='An Khe River Flow Forecasting'/>
            <ProjectItem image ={img3} href={href3} title ='Blog App-Django'/>
            <ProjectItem image ={img4} href={href4} title ='Job Searching with React'/>
        </div>
        </div>
  )
} 

export default Project