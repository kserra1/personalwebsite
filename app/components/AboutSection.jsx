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
            <p className="text-base lg:text-lg">I am a full stack web developer with a passion for creating
                interactive clean and responsive websites. I have experience
                working with TypeScript, React, Node.js, PostgreSQL, Python, and Git.
                I am always eager to learn new technologies to expand my knowledge and 
                skills. I enjoy working with teams and am excited to work with others to create
                amazing projects.
            </p>
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