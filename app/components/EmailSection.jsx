"use client";
import React, { useState } from 'react'
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted]=useState(false);
    console.log("test push")


    const handleSubmit= async (e)=>{
        e.preventDefault();
        const data={
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata= JSON.stringify(data);
        const endpoint = "/api/send";
        const options ={
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }

        const res = await fetch(endpoint, options);
        if(res.status === 200){
            console.log('Message sent successfully'); 
            setEmailSubmitted(true);
            const resData=await res.json();
        }
    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I am currently looking for new opportunities and would love to hear from you. 
                    Feel free to reach out to me via email or connect with me on LinkedIn.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/kserra1">
                        <Image src= {GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kieran-serra/">
                        <Image src= {LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
                </div>   
                <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        Your email
                        </label>
                    <input
                    name="email"
                     type="email"
                      id="email" 
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="subject" 
                    className="text-white block text-sm mb-2 font-medium">
                        Subject
                        </label>
                    <input
                    name="subject"
                     type="text"
                      id="subject" 
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Say Hello!"
                      />
                    </div>
                    <div className="mb-6">
                        <label 
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                        >
                            Message 
                        </label>
                        <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder='Hi Kieran, I would like to connect with you...'
                        />
                    </div>
                    <button 
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                    {
                        emailSubmitted&&(
                            <p className= "text-green-500 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
                </div>   
        </section>
    )
}

export default EmailSection