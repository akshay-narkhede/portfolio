import React from 'react';
import anflixImg from '../assets/anflixImage.PNG'
import covidScreens from '../assets/covidScreens.jpg'
import wallpse from '../assets/wallpse.png'
import sih2017 from '../assets/sih2017.jpg'
import Modal from './Modal';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { Tooltip, Button } from "@material-tailwind/react";

// onClick={() => handleClick("AnFlix", ["A movies listing webpage from TMDB APIs with all general categories of movies and TV shows with play trailers of selected movie names using node package module."] )}


function Work_() {
  
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [ModalTitle, setModalTitle] = React.useState("");
  const [ModalInfo, setModalInfo] = React.useState("");



async function handleClick(title, info){
    setShowPopUp(true)
    setModalTitle(title)
    setModalInfo(info)
    }

    // To be completed
async function handleClear(title, info){
    setShowPopUp(false)
    setModalTitle("")
    setModalInfo("")
    }

    function handleModal(title, info){
        return (
            <Modal/>
        )
    }




  return (
      <div name = 'work' className='w-full h-screen bg-[#070707] text-gray-300'  style={{display:"table"}}>
            <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-8 grid grid-cols-2 gap-8'>
                  <div className='pb-8'>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Projects</p>
                  </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 ">

                  {/* Project 1 */}
                  <div>
                      <Card className="w-96 rounded-3xl">
                          <CardHeader floated={false} className="h-56 rounded-t-2xl">
                              <img src={anflixImg} alt="ANFlix" className="h-full w-full"/>
                          </CardHeader>
                          <CardBody className="text-center bg-slate-800 text-gray-300 items-center rounded-b-2xl">
                              <Typography variant="h4" color="blue-gray" className="mb-2">
                                  <a href='https://anflix-movies.web.app/' target="_blank">
                                      <Tooltip placement="left" content="Check live site">
                                            ANFlix
                                      </Tooltip>
                                  </a>
                              </Typography>
                              <Typography color="blue" className="font-medium" textGradient>
                                  A movies listing webpage from TMDB APIs with all general categories of movies and TV shows with play trailers of selected movie names using node package module.
                              </Typography>
                              <div class="px-6 pt-4 pb-2 text-center">
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movies</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trailers</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#apis</span>
                              </div>
                          </CardBody>
                          
                      </Card>
                  </div>
                  {/* Project 2 */}
                  <div>
                      <Card className="w-96 rounded-3xl">
                          <CardHeader floated={false} className="h-56 rounded-t-2xl">
                              <img src={covidScreens} alt="CovidScreens" className="h-full w-full"/>
                          </CardHeader>
                          <CardBody className="text-center bg-slate-800 text-gray-300 items-center rounded-b-2xl">
                              <Typography variant="h4" color="blue-gray" className="mb-2">
                                  <a href='https://covidscreens.netlify.app/' target="_blank">
                                      <Tooltip placement="left" content="Check live site">
                                          Covid Screens
                                      </Tooltip>
                                  </a>
                              </Typography>
                              <Typography color="blue" className="font-medium" textGradient>
                                   Designed and implemented a covid screen tracker using covid19india apis with summary, graphical data. Created a simple dashboard using React library with help of Ant Design.
                              </Typography>
                              <div class="px-6 pt-4 pb-2 text-center">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#covid</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#data</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#india</span>
                                </div>
                          </CardBody>
                          
                      </Card>
                  </div>


                  {/* Project 3 */}
                  <div>
                      <Card className="w-96 rounded-3xl">
                          <CardHeader floated={false} className="h-56 rounded-t-2xl">
                              <img src={wallpse} alt="ANFlix" className="h-full w-full"/>
                          </CardHeader>
                          <CardBody className="text-center bg-slate-800 text-gray-300 items-center rounded-b-2xl">
                              <Typography variant="h4" color="blue-gray" className="mb-2">
                                  <a href='https://photos.app.goo.gl/3Vrnf7cA39YCiGta9' target="_blank">
                                      <Tooltip placement="left" content="Check video demo">
                                          Wallpse Android App
                                      </Tooltip>
                                  </a>
                              </Typography>
                              <Typography color="blue" className="font-medium" textGradient>
                                    An app uses a public API for dog images to display on user screen on scrolling (infinite scroll) and used JavaScript library for basic device details.                              </Typography>
                              <div class="px-6 pt-4 pb-2 text-center">
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#android</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ui</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#apis</span>
                              </div>
                          </CardBody>
                          
                      </Card>
                  </div>

                      {/* Project 4 */}
                      <div>
                      <Card className="w-96 rounded-3xl">
                          <CardHeader floated={false} className="h-56 rounded-t-2xl">
                              <img src={sih2017} alt="UGC" className="h-full w-full"/>
                          </CardHeader>
                          <CardBody className="text-center bg-slate-800 text-gray-300 items-center rounded-b-2xl">
                              <Typography variant="h4" color="blue-gray" className="mb-2">
                                           UGC Dashboard
                              </Typography>
                              <div class="font-small text-xs font-bold text-white">(Smart India Hackathon 2017, Government of India)
                              </div>
                              <Typography color="blue" className="font-medium" textGradient>
                                  A web application as part of the first Government organized Hackathon 2017 that enables UGC employees to maintain data in digital format instead of physical files.                 
                              </Typography>
                              <div class="px-6 pt-4 pb-2 text-center">
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SIH2017</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ugc</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#digitalization</span>
                              </div>
                          </CardBody>
                          
                      </Card>
                      </div>

              </div>

          </div>


            {showPopUp ? (
                    <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {ModalTitle}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => handleClear()}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                               {/* {ModalInfo}  */}
                                {ModalInfo.map(pt => {
                                    return (
                                    <div>
                                        <p>&#x2022; {pt}</p>
                                    </div>
                                    );
                                })}
                            </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleClear()}
                            >
                                Close
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

      </div>
  )
}

export default Work_