import React from 'react'

const Sample = () => {
  return (
      <div name = 'about' className='w-full h-screen bg-[#070707] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className=''>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
                  </div>
              </div>
              <div></div>
              <div className='max-w-[1000px] py-8 px-20 w-full grid sm:grid-cols-2 gap-8'>
                  <div className='text-2xl font-bold'>
                      <p>Hi. I'm Akshay, nice to meet you. Please take a look around.</p>
                  </div>
                  <div className='py-8 sm:py-0'>
                      <p>
                            Prior to starting graduate studies, I worked for around 5 years as a Software Developer with Financepeer.
                            As the first employee in the organization, I have had the opportunity to work on multiple products from scratch and wear multiple hats for my role. With 10 people in company we were selected in Google Launchpad Accelerator India event in 2019 where we received great mentorship from Google.
                            <br/><br/>
                            My area of interest include web development, mobile development and machine learning.
                            I enjoy experimenting with various technology as long as it enhances my work and gives me a sense of accomplishment.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Sample