import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import homeGif from '../assets/home.gif'


const Skills = () => {
  return (
      <div name = 'skills' id="skills" className='w-full h-screen bg-[#070707] text-gray-300' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${homeGif})`,backgroundPosition : 'center',  backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className=''>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Skills</p>
                  </div>
              </div>
              <div></div>
              <div className='max-w-[1000px]'>
                  <div className='text-xl font-bold items-center justify-center items-center'>

                    <p style={{  textAlign: "center"}}>
                    <br/>
                    <span className="effect-shine">ReactJS</span>&nbsp;&nbsp;&nbsp;
                    <span className="effect-shine">Django</span>&nbsp;&nbsp;&nbsp;
                    <span className="effect-shine">Python</span>

                    <br/>
                    <span className="effect-shine">PostgreSQL</span>&nbsp;&nbsp;&nbsp;
                    <span className="effect-shine">JavaScript</span>&nbsp;&nbsp;&nbsp;

                    <br/>
                    <span className="effect-shine">AWS(EC2, S3, Cloudfront, MediaConvert)</span>
                    <br/>
                    <span className="effect-shine">Nginx</span>&nbsp;&nbsp;
                    <span className="effect-shine">Git</span>&nbsp;&nbsp;
                    <span className="effect-shine">Celery</span>
                    </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Skills