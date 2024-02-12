
import React from 'react'




const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
    <div className="flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">About</h1>
        </div>
        <div className="flex space-x-4 mt-4">
            <a href="https://drive.google.com/file/d/1TKwhB5WT-hkM8UQ8KakTxbeePs7a-fyF/view?usp=sharing" 
            className="text-center inline-block bg-primary text-white cursor-pointer
             hover:bg-primary/80 py-2 px-4 my-3 rounded-lg;">Download Resume</a>
            <a href='https://www.linkedin.com/in/oshricohen1/'
             className="text-center inline-block ring-2 ring-primary inset-0 text-primary cursor-pointer hover:bg-primary/80
            hover:text-white py-2 px-4 my-3 rounded-lg;">Linkedin</a>
        </div>
        </div>
     
  )
}

export default About