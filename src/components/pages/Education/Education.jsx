import React from 'react'

const Education = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
        <div className="flex flex-col items-center">
            <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">Education</h1>
            <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            I have a bachelor's degree in computer science</p>
            <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            I studied at Ashkelon College between 2019-2022</p>
            <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            90 GPA </p>
            <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            Related Courses: Web Development, Object oriented programming, Algorithms, Operation Systems, Networking,
            Machine Learning and more.</p>
            <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            As part of the degree, I took an entrepreneurship and innovation course.
            In the course we were required to come up with new and innovative ideas.
            At the end of the course, I presented an enterprise that received honors.  </p>
            <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            In the final project, I worked with the Sociology Department at the college and built a website for
            them that builds a system of hours for many constraints.
            I got 92 on the project and the college is currently using the website</p>
        </div>
        <div className="mt-10 text-slate-500 font-bold text-black/80">
          <p>
          In addition, I did a course "The Complete 2024 Web Development Bootcamp" on the Udemy
          </p>
        </div>
    </div>
  )
}

export default Education