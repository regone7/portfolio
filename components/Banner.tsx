import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrLinkNext } from 'react-icons/gr'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'

import ContactInfo from './ContactInfo'



function Banner() {
    return (
        <div>
            <section>
                <div className='flex flex-col md:flex-row w-full md:p-7 p-5 gap-3 md:-mt-5'>
                    <div className='md:w-[65%] flex flex-col justify-end'>
                        <p>Hi, This is </p>
                        <h1 className='text-3xl'>Md Regone Hossain</h1>
                        <p className='text-2xl'>  Web Developer  </p>
                        <p> I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. My expertise extends to popular web development technologies like React.js, MongoDB, Firebase, Node.js, Express.js and currently learning Next.js, TypeScript. I am proficient in crafting responsive and visually appealing user interfaces using frameworks like Tailwind.</p>
                        <a href="https://drive.google.com/file/d/1ksTSGIYLbOsCXyr2FPMEBYS4fuSyE4Wq/view?usp=sharing" target="_blank"><button className='btn border-2 border-black hover:bg-green-300 mt-3'>Download Resume <GrLinkNext /></button></a>
                        <div className='flex mt-3 gap-2 text-3xl'>
                            <div>
                                <a href="https://github.com/regone7" target="_blank"><FaGithub /></a>
                            </div>
                            <div className='text-blue-700'>
                                <a href="https://www.facebook.com/abuj.mon.359" target="_blank"><FaFacebook /></a>

                            </div>
                            <div className='text-blue-500'>
                                <a href="https://www.linkedin.com/in/md-regone-hossain" target="_blank"><FaLinkedin /></a>

                            </div>
                        </div>
                        <div>Email: regone12345@gmail.com</div>
                        <p>+880 1795552887</p>
                    </div>
                    <div className='md:w-[34%]  '>
                        <Image
                            src="https://i.ibb.co/KNtszbV/linked-In-pic.png"
                            width={350}
                            height={250}
                            alt="Picture"
                        />
                    </div>
                </div>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <Education />
            </section>
            <section >
                <ContactInfo></ContactInfo>
                
                
            </section>
        </div>
    )
}

export default Banner
