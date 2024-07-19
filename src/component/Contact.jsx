import React from 'react'

const Contact =() =>{
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/bkkgnjjb" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2 font-semibold'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type="text" name='phone' />
                </div>
    
                </div>
                <div className='flex flex-col py-2'> 
                    <label className='uppercase text-sm py-2 font-semibold'>Email</label>
                    <input   className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 font-semibold'>Subject</label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 font-semibold'>Message</label>
                    <textarea  className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' />
                </div>
                <div className='p-2 w-full'>
                    <button className=' flex mx-auto text-white bg-[#001b5e] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' type='submit'>Send Message</button>
                </div>
                
                
           
        </form>
    </div>
  )
}

export default Contact