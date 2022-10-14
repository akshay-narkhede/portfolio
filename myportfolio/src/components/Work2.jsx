import React from 'react'
import anflixImg from '../assets/anflixImage.PNG'
import covidScreens from '../assets/covidScreens.jpg'


function Work2() {
  return (
      <div name = 'work' className='w-full h-screen bg-[#070707] text-gray-300 mx-auto'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8'>
                  <div className='pb-8'>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Work</p>
                  </div>
              </div>
              {/* Project 1 */}
              <div className='max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full m-8'>
                  <div class="grid grid-cols-2 gap-4">
                      {/* 1st  */}
                      <div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                              <img class="w-full" src="/assets/anflixImage.jpg" alt="Covid Tabular Data"/>
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Covid Screens</div>
                                <p class="text-gray-700 text-base">
                                      A covid screen tracker using covid19india apis with summary, graphical data.
                                </p>
                              </div>
                              <div className='pt-8 text-center'>
                                  <a href='https://covidscreens.netlify.app/' target="_blank">
                                      <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                      </button>
                                  </a>
                              </div>
                              <div class="px-6 pt-4 pb-2 text-center">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#covid</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#data</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#india</span>
                              </div>
                            </div>
                      </div>
                      {/* 2nd  */}
                      <div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                              <img class="w-full" src="/assets/anflixImage.jpg" alt="Movies Data"/>
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Movie Flix</div>
                                <p class="text-gray-700 text-base">
                                      A movies listing webpage from TMDB APIs with all general categories of movies and TV shows
with play trailers of selected movie names using node package module.
                                </p>
                              </div>
                              <div className='pt-8 text-center'>
                                  <a href='https://anflix-movies.web.app/' target="_blank">
                                      <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                      </button>
                                  </a>
                              </div>
                              <div class="px-6 pt-4 pb-2 text-center">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movies</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trailers</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tv</span>
                              </div>
                            </div>
                      </div>

                      {/* 3rd  */}
                      <div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                              <img class="w-full" src="/assets/anflixImage.jpg" alt="Wallpse"/>
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Wallpse Android App</div>

                                <p class="text-gray-700 text-base">
                                      An app uses a public API for dog images to display on user screen on scrolling (infinite scroll) and used JavaScript library for basic device details.
                                </p>
                              </div>
                              <div className='pt-8 text-center'>
                                  <a href='https://photos.app.goo.gl/3Vrnf7cA39YCiGta9' target="_blank">
                                      <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                      </button>
                                  </a>
                              </div>
                              <div class="px-6 pt-4 pb-2 text-center">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#android</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ui</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#apis</span>
                              </div>
                            </div>
                      </div>
                      {/* 4th  */}
                      <div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                              <img class="w-full" src="/assets/anflixImage.jpg" alt="UGC"/>
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">UGC Dashboard</div>
                                <div class="font-small text-xs">(Smart India Hackathon 2017, Government of India)</div>

                                <p class="text-gray-700 text-base">
                                      A web application as part of the first Government organized hackathon that
enables UGC employees to maintain data in digital format instead of physical files. I worked on creating interactive UI
dashboards with all required details and tools such as notifications, video & chat support which enabled UGC to make
faster decisions related to accreditation and distribution of grants.
                                </p>
                              </div>
                              <div class="px-6 pt-4 pb-2 text-center">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SIH2017</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ugc</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#digitalization</span>
                              </div>
                            </div>
                      </div>
                  </div>
              </div>


          </div>
      </div>
  )
}

export default Work2