import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
      <div name = 'contact' className='w-full h-screen bg-[#070707] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className=''>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Contact me</p>
                  </div>
              </div>
              <div></div>
              <div className='max-w-[1000px] py-8 px-20 w-full grid sm:grid-cols-2 gap-8'>
                  <div className='text-xl font-bold items-center'>

                    <ul>
                            <li className='flex justify-between items-center my-4'>
                                <a  className='flex justify-between items-center w-full text-gray-300'
                                    href='mailto:narkhede.aks@gmail.com?subject=Contact Akshay Narkhede' target="_blank"> 
                                        <FaEnvelope/> <p style={{float:"left",fontSize: "small"}}>narkhede.aks@gmail.com</p>
                                    </a>
                            </li>
                            <li className='flex justify-between items-center my-4'>
                                <a  className='flex justify-between items-center w-full text-gray-300'
                                    href='https://linkedin.com/in/akshay-narkhede' target="_blank"> 
                                        <FaLinkedin/> <p style={{float:"left",fontSize: "small"}}>linkedin.com/in/akshay-narkhede</p>
                                    </a>
                            </li>
                            <li className='flex justify-between items-center my-4'>
                                <a  className='flex justify-between items-center w-full text-gray-300'
                                    href='https://github.com/akshay-narkhede' target="_blank"> 
                                        <FaGithub/> <p style={{float:"left",fontSize: "small"}}>github.com/akshay1311</p>
                                    </a>
                            </li>
                
                    </ul>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Contact