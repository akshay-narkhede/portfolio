import React from 'react'
import anflixImg from '../assets/anflixImage.PNG'
import covidScreens from '../assets/covidScreens.jpg'


function Experience() {
  return (
      <div name = 'work' className='w-full h-screen bg-[#070707] text-gray-300 mx-auto'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className='pb-8'>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Experience</p>
                  </div>
              </div>
              {/* Project 1 */}
              <div className='max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full m-8'>
                  <div class="grid grid-cols-2 gap-4">
                      {/* 1st  */}
                      <div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                              <img class="w-full" src="/assets/anflixImage.jpg" alt="Impactp2p"/>
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Impactp2p</div>
                                <p class="text-gray-700 text-base">
                                      Impactp2p is a peer to peer lending platform connecting individual borrowers to lenders digitally. Financepeer looks forward to spearheading a truly revolutionary impact for millions of people. It's a step to reduce economic disparity in the long run.
                                </p>
                              </div>
                              <div className='pt-8 text-center'>
                                  <a href='https://impactp2p.com/' target="_blank">
                                      <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                      </button>
                                  </a>
                              </div>
                            </div>
                      </div>
                      {/* 2nd  */}
                      <div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                              <img class="w-full" src="/assets/anflixImage.jpg" alt="EdInfinity"/>
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">EdInfinity</div>
                                <p class="text-gray-700 text-base">
                                      Financepeer is a platform that helps parents/students pay their fees in easy installments. We provide easy EMIs starting from 0% for a duration of up to 24 months.
                                </p>
                              </div>
                              <div className='pt-8 text-center'>
                                  <a href='https://www.financepeer.com/edinfinity/' target="_blank">
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
      </div>
  )
}

export default Experience