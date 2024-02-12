import React from 'react';
import personImg from "../../../assets/personalImg.jpeg"

const FirstPage = () => {
  return (
    <div className="h-full">
        <main className="h-full w-full bg-secondary page-shadow">
            <div className="px-10 space-y-4">
            <div>
                <img src={personImg} alt="" className="w-[200px] mx-auto" />
            </div>
            <div>
                <div className="space-y-3">
                    <p className="">HELLO</p>
                    <p className="text-4xl md:text-6xl font-bold text-black/80 text-primary" >I'm Oshri</p>
                    <p className="text-black/75 text-left">bachelor's degree in computer science</p>
                    <p className="text-black/75">An eager computer science graduate.
                      Currently, studying independently and building websites.
                      looking for a full-time and challenging position, Ready to help a team achieve company goals.
                       A creative thinker with the ability to lead with strong organizational skill,
                      Excellent communication skills and the ability to troubleshoot complex problems.
                      </p>

                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default FirstPage