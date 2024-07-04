import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='h-32 flex flex-col justify-center bg-sky-100 p-12 md:mt-9 '>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-300 text-center">© Copyright 2024. All Rights Reserved Md Regone Hossain .</p>

        <div className="flex -mx-2 gap-3 text-3xl ">

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
      </div>
    </div>
  )
}

export default Footer
