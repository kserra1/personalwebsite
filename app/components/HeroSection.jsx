"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';



const HeroSection = () => {
    return( 
        <section>
           <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial = {{opacity:0, scale:0.5}} 
            animate={{opacity:1 , scale:1}} 
            transition= {{duration: 1}} 
            className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    Hello, I&apos;m{" "} 
                </span>
                <br></br>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Kieran',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A Software Engineer',
        1000,
        'A Full Stack Developer',
        1000,
        'A Data Scientist',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              I am a computer science major with a passion in software engineering
            </p>
            <div>
                <a href="https://forms.gle/rXsAGkwRfPBgxt536" target="_blank">
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                    Hire Me
                    </button>
                    </a>
                <a href="Kieran-Serra-Resume.pdf" download="Kieran-Serra-Resume.pdf">
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                    </button>
                    </a>
            </div>
            </motion.div>
            <motion.div            
            initial = {{opacity:0, scale:0.5}} 
            animate={{opacity:1 , scale:1}} 
            transition= {{duration: 1}}  className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                src="/images/Pictureofme.jpg"
                alt="Picture of Kieran"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
            />
            </div>
            </motion.div>
            </div>
        </section>
    );
}

export default HeroSection