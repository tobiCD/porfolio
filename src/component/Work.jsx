import React from 'react'
import WorkItem from './WorkItem'

const data1 =[
    {
    year : 2023,
    title : `Internship in (AIRC) `,
    duration : '2 Months',
    details : `As a developer for the An Khe river water flow prediction project, my responsibilities included researching LSTM networks for hydrological forecasting. I processed and prepared data using Python and ensured its integrity by addressing
    duplicates and missing values. Using TensorFlow, 
    I optimized LSTM parameters and designed network architectures.
    I evaluated model performance with accuracy metrics and visualized results using matplotlib for comprehensive
    reporting. My role also involved staying updated with the latest LSTM advancements and methodologies for effective implementation in water flow prediction.`
},

]
 const data2=[

{   

    year : `2020-2024`,
    title : 'Degree of Software Engineer',
    duration : '4,5 Years',
    details : `Throughout my studies, I've immersed myself in a range of subjects, from programming languages like JavaScripts and Python to software design, data structures, and cybersecurity. I'm eager to apply my knowledge to solve real-world challenges and contribute meaningfully to the tech industry. Looking forward to connecting with each of you and sharing experiences in this dynamic field!.`
},
]

const Work = () => {
  return (
    <>
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experence</h1>
        {data1.map((item,idx) =>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Education</h1>
        {data2.map((item,idx) =>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
    </>
    
  )
}

export default Work