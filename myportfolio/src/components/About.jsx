import React from 'react'

const About = () => {
  return (
      <div name = 'about' className='w-full h-screen bg-[#070707] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-8 grid grid-cols-2 gap-8'>
                  <div className=''>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
                  </div>
              </div>
              <div className='max-w-[1000px] py-8 px-20 w-full grid sm:grid-cols-2 gap-8 px-8'>
                  <div className='sm:text-right text-2xl font-bold'>
                      <p>Hey hi again, nice to meet you. Please take a look around.</p>
                  </div>
                  <div className='py-8 sm:py-0'>
                      <p>
                            Prior to starting graduate studies, I worked for around 5 years as a Software Developer with Financepeer.
                            As the first employee in the organization, I have had the opportunity to work on multiple products from scratch and wear multiple hats for my role. With 10 people in company we were selected in Google Launchpad Accelerator India event in 2019 where we received great mentorship from Google.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About