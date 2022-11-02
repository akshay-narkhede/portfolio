import React from 'react'
import homeGif from '../assets/home.gif'


const Note = () => {
  return (
      <div name = 'note' className='flex flex-col justify-between text-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url(${homeGif})`,backgroundPosition : 'center',  backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
              <div className='bg-[#070707] text-white py-8'>
                      <p>
                            This portfolio website is created using ReactJS & Tailwind CSS.
                      </p>
              </div>
          </div>
  )
}

export default Note