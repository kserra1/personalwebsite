"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';


const projectsData=[
    {
        id: 1,
        title: "Java Search Engine",
        description: "Information Retrieval system incorporating TF-IDF methodology enabling querying based on specific terms and relevance lookup",
        image: "/images/projects/TFIDF.jpeg",
        tag: ["All", "Backend"],
        gitUrl: "https://github.com/kserra1/Information-Retrieval",
        previewUrl: "https://github.com/kserra1/Information-Retrieval"
    },
    {
        id:2,
        title: "Full Stack Personal Finance Application",
        description: "Built a personal finance app using React & Django. Manages accounts, tracks balances, and facilitates transactions. (deployed on AWS EC2 Instance).",
        image: "/images/projects/financeapp.png",
        tag: ["All", "Frontend", "Backend"],
        gitUrl: "https://github.com/kserra1/personal-finance-app",
        previewUrl: "https://github.com/kserra1/personal-finance-app"
    },
    {
        id:3,
        title: "Student Grade Dashboard",
        description: "Student performance tracking dashboard, leveraging API integration to enable dynamic data retrieval and seamless synchronization",
        image: "/images/projects/studentdashboard.jpg",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/kserra1",
        previewUrl: "https://github.com/kserra1",
    },
    {
      id:4,
      title: "Data Retrieval System",
      description: "Crafted an application to extract data from various APIs, including geo-coordinate and temperature retrieval for weather statistics computation",
      image: "/images/projects/Weatherimage.jpeg",
      tag: ["All", "Backend"],
      gitUrl: "https://github.com/umass-compsci-220-spring-24-hw7/40",
      previewUrl: "https://github.com/umass-compsci-220-spring-24-hw7/40",
    },
    {
      id: 5,
      title: "React Portfolio",
      description: "Created an engaging personal website portfolio with React.js, Next.js, and Tailwind CSS, featuring dynamic components and animations, and deployed on Vercel for optimal hosting and scalability",
      image: "/images/projects/WebsiteImage.jpeg",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/kserra1/portfoliowebsite",
      previewUrl: "https://portfoliowebsite-liard-three.vercel.app/",
    },
    {
      id: 5,
      title: "DNA-Profiler",
      description: "Designed a tool that reads in CSV files and uses algorithms to compare DNA sequences to output a match name.",
      image: "/images/projects/DNAIMAGE.jpeg",
      tag: ["All", "Backend"],
      gitUrl: "https://github.com/kserra1/Dna-Profiler",
      previewUrl: "https://github.com/kserra1/Dna-Profiler",
    }
]

const ProjectsSection = () => {
  const [tag, setTag]=useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  const handleTagChange=(newTag)=>{
        setTag(newTag);
    }

  const filteredProjects= projectsData.filter((project)=>
    project.tag.includes(tag)
  );

  const cardVariants={
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  }

  return (
    <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag==="All"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Frontend" 
        isSelected={tag==="Frontend"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Backend" 
        isSelected={tag==="Backend"}
        />
        </div>
    <ul ref = {ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index)=>(
          <motion.li 
          key={index}
          variants= {cardVariants}
          initial="initial"
          animate={isInView? "animate": "initial"}
          transition={{duration: 0.3, delay: index*0.4}}
          >
    <ProjectCard 
    key ={project.id} 
    title= {project.title} 
    description= {project.description}
    imgUrl={project.image} 
    tags={project.tag}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}
    />
    </motion.li>
    ))}
    </ul>
    </section>
  );
};

export default ProjectsSection