import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import homeGif from '../assets/home.gif'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <div name = 'home' id="home" className='w-full h-screen bg-[#070707]' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${homeGif})`,backgroundPosition : 'center',  backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div>
              <br/><br/>
              <p className='text-blue-600 text-3xl font-semibold leading-loose'>Hey hi,</p>
              <h1 className='text-3xl sm:text-4xl font-bold text-white leading-loose'>I am Akshay Narkhede.</h1>
              {/* <h2 className='text-3xl sm:text-4xl font-bold text-[#F3F9FC]'>I'm a Full Stack Developer.</h2> */}
              <h2 className='text-3xl sm:text-4xl font-bold text-[#F3F9FC] leading-loose'>I love building web & mobile applications.</h2>
              {/* <h2 className='text-3xl sm:text-5xl font-bold text-[#F3F9FC] leading-loose'>I build web and mobile applications.</h2> */}
              <p className='text-[#F3F9FC] py-4 max-w-[800px] leading-loose'>
                     I'm a software engineer specializing in building and designing exceptional digital experiences. Currently, I'm a graduate student at Indiana University Bloomington for Masters in Computer Science.
                    <br/>
              </p>
              <div className='py-8'>
                   <AnchorLink href='#about' className='px-4'>
                   <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-blue-600 hover:border-blue-600'>about me
                      <span className='group-hover:px-2 duration-200'>
                            <HiArrowNarrowRight className='ml-2' />
                      </span>
                    </button>

                   </AnchorLink>

                    
              </div>
            </div>

              
 
          </div>    
      </div>
  )
}

export default Home