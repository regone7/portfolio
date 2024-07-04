import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'

function Projects() {
    return (
        <div>
            <div className='container mx-auto md:p-5 p-3'>
                <h1 className='text-xl font-bold text-center md:mt-3 md:mb-7  mt-3'>Projects</h1>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="card bg-base-100  shadow-xl rounded-none">
                        {/* <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure> */}
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Innovate Contest</h2>
                            <p>This website is Contest Platform</p>
                            <div>

                                <label htmlFor="my_modal_6" className="btn btn-sm bg-blue-100 hover:bg-blue-300">Features <GrFormNextLink /></label>

                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <p className='font-bold'>Features  </p>
                                        <p>1. User can search contest name, saw their participated contest, winning contest, update profile.</p>
                                        <p>2. Creator can add contest, update contest and declare the winner.</p>
                                        <p>3. Admin can Manage User: change user role, delete, block. Manage Contest: confirm the contest, delete the contest, comment on contest.</p>
                                        <div className="modal-action">
                                            <label htmlFor="my_modal_6" className="btn">Close</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'> Technology - </p>
                                <p>React, React Router, Tailwind CSS, daisyUI, TanStack Query, Firebase, Express.js, MongoDB.</p>
                            </div>
                            <div className=' p-3 flex gap-3 flex-col md:flex-row item-center justify-center'>
                                <a href='https://github.com/regone7/contest-platform-client' target='_blank' className='text-blue-400 hover:text-blue-700' > Client Side </a>
                                <a href='https://github.com/regone7/contest-platform-server' target='_blank' className='text-blue-400 hover:text-blue-700' >Server Side </a>
                                <a href='https://contest-creation-platfor-e05ad.web.app' target='_blank' className='text-blue-400 hover:text-blue-700' >Live </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl rounded-none">
                        {/* <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure> */}
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">E-Assignment Collaborative</h2>
                            <p>This website is online study assignment.</p>
                            <div>

                                <label htmlFor="my_modal_7" className="btn btn-sm bg-blue-100 hover:bg-blue-300">Features <GrFormNextLink /></label>

                                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <p className='font-bold'>Features  </p>
                                        <p>1. Any user can create assignment. Only the person who created the assignment can delete the assignment. The person who submitted the assignment cannot give on this assignment.</p>
                                        <p>2. In My Submitted/attempted assignment page will have all assignments which are submitted by the specific user and he can saw his attempted assignment mark status.</p>
                                        <p>3. MCQ Type Quiz attempt.</p>
                                        <div className="modal-action">
                                            <label htmlFor="my_modal_7" className="btn">Close</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'> Technology - </p>
                                <p>React, React Router, Tailwind CSS, daisyUI, JWT, Firebase, Express.js, MongoDB.</p>
                            </div>
                            <div className=' p-3 flex gap-3 flex-col md:flex-row item-center justify-center'>
                                <a href='https://github.com/regone7/online-study-assignment-client' target='_blank' className='text-blue-400 hover:text-blue-700' > Client Side </a>
                                <a href='https://github.com/regone7/online-study-assignment-server' target='_blank' className='text-blue-400 hover:text-blue-700' >Server Side </a>
                                <a href='https://online-study-assignment.web.app' target='_blank' className='text-blue-400 hover:text-blue-700' >Live </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl rounded-none">
                        {/* <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure> */}
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Sketchbook</h2>
                            <p>This website is Painting and Drawing Information.</p>
                            <div>

                                <label htmlFor="my_modal_8" className="btn btn-sm bg-blue-100 hover:bg-blue-300">Features <GrFormNextLink /></label>

                                <input type="checkbox" id="my_modal_8" className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <p className='font-bold'>Features  </p>
                                        <p>1. User can add craft item, they can fill a form to necessary information.</p>
                                        <p>2. By use my art and craft page user update or delete her information.</p>
                                        <p>3. Specific user can saw art and craft that he added by use my art and craft page.</p>
                                        <div className="modal-action">
                                            <label htmlFor="my_modal_8" className="btn">Close</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'> Technology - </p>
                                <p>React, React Router, Tailwind CSS, daisyUI, Firebase, Express.js, MongoDB.</p>
                            </div>
                            <div className=' p-3 flex gap-3 flex-col md:flex-row item-center justify-center'>
                                <a href='https://github.com/regone7/craft-server' target='_blank' className='text-blue-400 hover:text-blue-700' > Client Side </a>
                                <a href='https://github.com/regone7/craft-server' target='_blank' className='text-blue-400 hover:text-blue-700' >Server Side </a>
                                <a href='https://art-craft-b287c.web.app' target='_blank' className='text-blue-400 hover:text-blue-700' >Live </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
