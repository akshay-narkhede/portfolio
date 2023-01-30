import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import homeGif from '../assets/home.gif'


const Contact = () => {
  return (
      <div name = 'contact' id="contact" className='w-full h-screen bg-[#070707] text-gray-300' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${homeGif})`,backgroundPosition : 'center',  backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className=''>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Contact</p>
                  </div>
              </div>
              <div></div>
              <div className='max-w-[1000px]'>
                  <div className='text-xl font-bold items-center'>

                    <ul>
                            <li className='flex justify-between items-center my-4'>
                                <a  className='flex justify-between items-center w-full text-gray-300'
                                    href='mailto:narkhede.aks@gmail.com?subject=Contact Akshay Narkhede' target="_blank"> 
                                        <FaEnvelope/> <p className='px-12' style={{fontSize: "small"}}>narkhede.aks@gmail.com</p>
                                    </a>
                            </li>
                            <li className='flex justify-between items-center my-4'>
                                <a  className='flex justify-between items-center w-full text-gray-300'
                                    href='https://linkedin.com/in/akshay-narkhede' target="_blank"> 
                                        <FaLinkedin/> <p className='px-18' style={{fontSize: "small"}}>linkedin.com/in/akshay-narkhede</p>
                                    </a>
                            </li>
                            <li className='flex justify-between items-center my-4'>
                                <a  className='flex justify-between items-center w-full text-gray-300'
                                    href='https://github.com/akshay-narkhede' target="_blank"> 
                                        <FaGithub/> <p className='px-14' style={{fontSize: "small"}}>github.com/akshay1311</p>
                                    </a>
                            </li>
                
                    </ul>
                  </div>
              </div>
              <div className='text-white py-8 effect-note b-0'>
                      <p>
                            This portfolio website is created using ReactJS & Tailwind CSS.
                      </p>
              </div>

          </div>

      </div>
  )
}

export default Contact