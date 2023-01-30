import React from 'react'
import homeGif from '../assets/home.gif'


const About = () => {
  return (
      <div name = 'about' id="about" className='w-full h-screen bg-[#070707] text-gray-300' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${homeGif})`,backgroundPosition : 'center',  backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-8 grid grid-cols-2 gap-8'>
                  <div className=''>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
                  </div>
              </div>
              <div className='max-w-[1000px] py-8 px-20 w-full grid sm:grid-cols-2 gap-8 px-8'>
                  <div className='sm:text-right text-xl font-bold'>
                      {/* <p>Hey hi again, nice to meet you. Please take a look around.</p> */}
                      {/* <p>I am a full-stack developer.</p> */}
                      <p>My area of interest include web & mobile development, machine learning. 
I enjoy experimenting with various technology as long as it enhances my work and gives me a sense of accomplishment.</p>
                  </div>
                  <div className='py-8 sm:py-0' style={{fontStyle: 'oblique'}}>
                      <p>
                            Prior to starting graduate studies, I worked for around 5 years as a Software Developer with Financepeer, Mumbai, IN.
                            As the first employee in the organization, I have had the opportunity to work on multiple products from scratch and wear multiple hats for my role. With 10 people in company we were selected in Google Launchpad Accelerator India event in 2019 where we received great mentorship from Google.
                            Algorithms built by me were used very heavily on a daily basis which were handling business of more than Rs.1Cr. (~ 250K USD).

                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About