import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { GrCatalogOption } from 'react-icons/gr'
import { HiOutlineCommandLine } from 'react-icons/hi2'
import { SiFramework } from 'react-icons/si'
import Navbar from './Navbar'

function Skills() {
  return (
    <div id='skills' className='container mx-auto md:p-5 p-3'>
      <h1 className='text-xl font-bold text-center md:mt-3 md:mb-7 mb-5 mt-3'>Skills</h1>
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className='flex flex-col items-center'>

            <div className='text-4xl text-blue-300'><HiOutlineCommandLine /></div>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">Programming Languages:</h1>
            <p >  C | Python | JavaScript </p>
          </div>

          <div className='flex flex-col items-center'>

            <div className='text-4xl text-blue-300'><SiFramework /> </div>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">Frameworks/Libraries:</h1>
            <p >  React.js | Node.js | Express.js | Next.js </p>
          </div>

          <div className='flex flex-col items-center'>

            <div className='text-4xl text-blue-300'><FaDatabase /></div>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">Databases:</h1>
            <p > MongoDB | Basic MySQL </p>
          </div>

          <div className='flex flex-col items-center'>

            <div className='text-4xl text-blue-300'><GiBrain /></div>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">Soft Skills:</h1>
            <p className='text-center' > Problem Solving | Teamwork | Strong Work Ethic | Adaptability | Critical Thinking </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
