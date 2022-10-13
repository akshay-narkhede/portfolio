import React from 'react'
import anflixImg from '../assets/anflixImage.PNG'
import covidScreens from '../assets/covidScreens.jpg'


function Work() {
  return (
      <div name = 'work' className='w-full h-screen bg-[#070707] text-gray-300 mx-auto'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className='pb-8'>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Work</p>
                  </div>
              </div>
              {/* Project 1 */}
              <div style={{backgroundImage:`url(${anflixImg})`}} className='grid gap-4 object-contain content-div'>
                  {/* Card */}
                  <div className='shadown-lg shadow-[#FFFF00] group container rounded-md flex justify-center items-center mx-auto'>
                      {/* Hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl font-bold text-white tracking-wider'>
                              Movie Flix Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href='/'>
                                  <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                  </button>
                              </a>
                          </div>
                      </div>
                  </div>

              </div>
              {/* Project 2 */}
              <div style={{backgroundImage:`url(${covidScreens})`}} className='grid gap-4 object-contain'>
                  {/* Card */}
                  <div className='shadown-lg shadow-[#FFFF00] group container rounded-md flex justify-center items-center mx-auto content-div'>
                      {/* Hover effect */}
                      <div className='opacity-100'>
                          <span className='text-2xl font-bold text-white tracking-wider'>
                              Movie Flix Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href='/'>
                                  <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                  </button>
                              </a>
                          </div>
                      </div>
                  </div>

              </div>

          </div>
      </div>
  )
}

export default Work