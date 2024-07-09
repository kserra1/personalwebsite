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
                <li>JavaScript</li>
                <li>Java</li>
                <li>C</li>
                <li>R</li>
                <li>Swift</li>
       
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
    {
        title: "Technologies",
        id: "technologies",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>TensorFlow</li>
                <li>AWS</li>
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
            <p className="text-base lg:text-lg">I am a passionate software engineer currently pursuing a Bachelor&apos;s degree 
            in Computer Science at the University of Massachusetts Amherst. With a strong foundation in programming languages 
            such as Python, Java, TypeScript, R, and C, I develop robust software solutions using technologies such as
            React.js, Django, and databases such as MongoDB, and PostgreSQL. I am passionate about machine learning using technologies such as 
            TensorFlow, pandas, and NumPy. I have experience leveraging AWS, Git, and CI/CD practices to deliver 
            scalable software solutions.</p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton 
                selectTab={()=>handleTabChange("skills")} 
                active={tab==="skills"}
                >
                {" "}
                Programming Languages{" "}
                </TabButton>
                <TabButton 
                selectTab={()=>handleTabChange("education")} 
                active={tab==="education"}
                >
                {" "}
                Education{" "}
                </TabButton>
                <TabButton
                selectTab={()=>handleTabChange("technologies")}
                active={tab==="technologies"}
                >
                {" "}
                Technologies{" "}
                </TabButton>
             
                </div>
            <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab).content}</div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection