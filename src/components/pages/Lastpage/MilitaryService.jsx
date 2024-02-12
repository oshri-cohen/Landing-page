import React from 'react'

const MilitaryService = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
    <div className="flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">Military Service</h1>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
        I served in the Ministry of Defense in 2018-2016</p>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
        <ol>
            <li>Security classication at the level of secrecy - security clearance 1</li>
            <li>Service in a classied unit</li>
        </ol>
        </p>
        </div>
        </div>
  )
}

export default MilitaryService