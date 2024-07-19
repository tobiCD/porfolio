import React from 'react'
import ProjectItem from './ProjectItem'
import img1 from '../assets/CMC-glitch.png'
import img2 from '../assets/handholding.81456b15234d.png'
import img3 from '../assets/Screenshot_2024-04-12_123334.88dfb5a59cd2.png'
import img4 from '../assets/Capture.PNG'

const Project=()=>{
return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'
    >
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cupiditate nam quibusdam similique qui veritatis quia perspiciatis. Expedita et corporis unde, rerum, 
            repellendus velit accusantium ut quo fugiat inventore voluptatibus.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem image={img1} title='Beautiful'/>
            <ProjectItem image={img3} title ='AI Reconigzed'/>
            <ProjectItem image ={img3} title ='Simon Game'/>
            <ProjectItem image ={img4} title ='Blog App'/>
        </div>
        </div>
  )
} 

export default Project