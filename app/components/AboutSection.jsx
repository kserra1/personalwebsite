"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA=[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Typescript</li>
                <li>C</li>
                <li>Java</li>
                <li>PostgreSQL</li>
                <li>Node.js</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Programming Methodologies</li>
                <li>Object Oriented Programming</li>
                <li>Discrete Mathmatics</li>
                <li>Statistics and Probability Theory</li>
                <li>Linear Algebra</li>
                <li>Intro to Artificial Intelligence</li>
                <li>Intro to Data Analysis</li>
            </ul>
        )
    },
  /*  {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Tech Assistant</li>
                <li>Web Developer Intern</li>
            </ul>
        )
    }
    */
]


const AboutSection = () => {
  const [tab, setTab]=useState("skills");
  const [isPending, startTransition] = useTransition();


const handleTabChange=(id)=>{
    startTransition(()=>{
        setTab(id);
    });
}

  return (
  <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src ="/images/ProgrammingImage.jpeg" alt="" width={800} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">I am a full stack web developer dedicated to building quality software and clean 
            websites for users. Specializing in TypeScript, React, Node.js, PostgreSQL, Python,
            and Git, I ensure that my projects are scalable, maintainable, and efficient. I enjoy learning
            and am quick to adapt to new technologies and frameworks. I do well in team settings and am
            always looking to collaborate with others to develop innovative solutions.</p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton 
                selectTab={()=>handleTabChange("skills")} 
                active={tab==="skills"}
                >
                {" "}
                Skills{" "}
                </TabButton>
                <TabButton 
                selectTab={()=>handleTabChange("education")} 
                active={tab==="education"}
                >
                {" "}
                Education{" "}
                </TabButton>
                <TabButton 
                selectTab={()=>handleTabChange("experience")} 
                active={tab==="experience"}
                >
                {" "}
                </TabButton>
                </div>
            <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab).content}</div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection