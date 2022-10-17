import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#070707]'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <p className='text-blue-600 text-xl font-semibold'>Hi, my name is</p>
              <h1 className='text-3xl sm:text-4xl font-bold text-white'>Akshay Narkhede.</h1>
              {/* <h2 className='text-3xl sm:text-4xl font-bold text-[#F3F9FC]'>I'm a Full Stack Developer.</h2> */}
              <h2 className='text-3xl sm:text-4xl font-bold text-[#F3F9FC]'>I build web and mobile applications.</h2>
              <p className='text-[#F3F9FC] py-4 max-w-[800px]'>
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
                    Currently, I'm a graduate student at Indiana University Bloomington for Masters in Computer Science.
                    <br/>
              </p>
              <div className='py-8'>
                    <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-blue-600 hover:border-blue-600'>View
                      <span className='group-hover:px-2 duration-200'>
                            <a href="#next"><HiArrowNarrowRight className='ml-2' /></a>
                      </span>
                    </button>
              </div>
          </div>
          <div id="next"></div>
    </div>
  )
}

export default Home