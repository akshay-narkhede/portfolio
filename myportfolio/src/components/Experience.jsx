import React from 'react'
import p2p from '../assets/p2p.jpg'
import edinfinity from '../assets/edinfinity.png'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";


function Experience() {

    const [showPopUp, setShowPopUp] = React.useState(false);
    const [ModalTitle, setModalTitle] = React.useState("");
    const [ModalInfo, setModalInfo] = React.useState("");



    async function handleClick(title, info) {
        setShowPopUp(true)
        setModalTitle(title)
        setModalInfo(info)
    }

    // To be completed
    async function handleClear(title, info) {
        setShowPopUp(false)
        setModalTitle("")
        setModalInfo("")
    }
    return (
        <div name='exp' className='w-full h-screen bg-[#070707] text-gray-300 inline-flex' style={{display:"inline-block"}}>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-8 grid grid-cols-2 bg-[#070707]'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Experience</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 ">
                    {/*Card 1 */}
                    <Card className="w-96 z-0 sm:mx-4">
                        <CardHeader color="blue" className="relative h-56">
                            <img
                                src={p2p}
                                alt="img-blur-shadow"
                                className="h-full w-full"
                            />
                        </CardHeader>
                        <CardBody className="text-center bg-slate-800 text-gray-300 items-center">
                            <Typography variant="h5" className="mb-2 underline decoration-solid">
                                <a href=' https://www.impactp2p.com/' target="_blank">
                                      <Tooltip placement="left" content="Check live website">
                                           Impactp2p (Financepeer)
                                      </Tooltip>
                                  </a>
                            </Typography>
                            <Typography>
                                Impactp2p is a peer to peer lending platform connecting individual borrowers to lenders digitally.
                            </Typography>
                            <Typography variant="h6" className="mb-2 truncate tracking-wide underline decoration-dotted ">
                                Role : Lead Software Developer
                            </Typography>
                        </CardBody>
                        <CardFooter divider className="flex items-center justify-between py-0 bg-slate-800 text-gray-300 items-center">
                            <Typography variant="small">
                                <a href='https://www.youtube.com/watch?v=MLWgi5Pn7Lw' target="_blank">
                                    <Tooltip placement="bottom" content="Watch demo video">
                                        <Button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold' variant="gradient">Demo</Button>
                                    </Tooltip>
                                </a>
                            </Typography> 
                            <Typography variant="small" color="gray" className="flex">
                            <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold m-5'
                                    onClick={() => handleClick("Impactp2p", ["Impactp2p is a p2p lending and borrowing platform designed to address the financial needs of self-employed, salaried individuals through a highly secure and digital medium.",
                                                                             "I have Developed an entire loan system with KYC integration, Bank analysis & Credit checks integration with dashboards.",
                                                                            "I have designed and developed core of investor flow where they can invest and earn returns with auto-invest, portfolios management & liquidity, and interactive dashboards.",
                                                                            "I have designed and developed core components of EMI & Penalty Payment scheduling and distributing to lenders & revenue management.",
                                                                            "I have optimized the business impacting algorithms such that it helped to reduce TAT from 2-3 minutes to under 100 milliseconds.",
                                                                            "I have implemented caching & queuing mechanism using Celery, optimized SQL queries for the project.",
                                                                            "I have identified data issues and provided RCA with corrective steps to business users."])}
                                >
                                    More info
                                </button>
                            </Typography>
                        </CardFooter>
                    </Card>

                    {/*Card 2 */}
                    <Card className="w-96 z-0 sm:mx-4">
                        <CardHeader color="blue" className="relative h-56">
                            <img
                                src={edinfinity}
                                alt="img-blur-shadow"
                                className="h-full w-full"
                            />
                        </CardHeader>
                        <CardBody className="text-center bg-slate-800 text-gray-300 items-center">
                            <Typography variant="h5" className="mb-2 underline decoration-solid">
                                 <a href='https://www.financepeer.com/edinfinity/' target="_blank">
                                      <Tooltip placement="left" content="Check live site">
                                           EDInfinity (Financepeer)
                                      </Tooltip>
                                  </a>
                            </Typography>
                            <Typography>
                                  EDinfinity is a one stop solution for availing top online courses from India's best content creators.
                            </Typography>
                            <Typography variant="h6" className="mb-2 tracking-wide underline decoration-dotted">
                                Role : Lead Software Developer
                            </Typography>
                        </CardBody>
                        <CardFooter divider className="flex items-center justify-between py-0 bg-slate-800 text-gray-300 items-center">
                            <Typography variant="small">
                                <a href='https://www.financepeer.com/edinfinity/' target="_blank">
                                    <Tooltip placement="bottom" content="Check live site">
                                        <Button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold' variant="gradient">Live</Button>
                                    </Tooltip>
                                </a>
                            </Typography>
                            <Typography variant="small" color="gray" className="flex">
                                <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold m-5'
                                    onClick={() => handleClick("Impactp2p", ["Edinfinity is an educational content consumption platform where self-hosted content and business partner-hosted content are consumed using rewards management.",
                                                                             "I have designed and developed an entire journey of content listing web and mobile application, with streaming enabled for different resolutions using AWS MediaConvert and CloudFront.",
                                                                            "I have designed and developed content streaming (OTT) platform using AWS S3, MediaConvert to stream on demand educational content selected / recommended to user.",
                                                                            "I have optimized the web applications using server level and client level caching."])}
                                >
                                    More info
                                </button>
                            </Typography>
                        </CardFooter>
                    </Card>


                    {/* Project 1 
                    <div style={{ backgroundImage: `url(${p2p})`, backgroundSize: 'cover' }} className='grid gap-4 object-contain content-div rounded-lg'>
                        <div className='shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto'>
                            {/* Hover effect 
                            <div className=' text-center'>
                                <span className='text-2xl font-bold text-white tracking-wider text-black'>
                                    Impactp2p
                                </span>
                                <div className='pt-8 text-center opacity-0 group-hover:opacity-100'>
                                    <a href='https://www.youtube.com/watch?v=MLWgi5Pn7Lw' target="_blank">
                                        <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                        </button>
                                    </a>
                                    <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold m-5'
                                        onClick={() => handleClick("Impactp2p", ["Impactp2p is a peer to peer lending platform connecting individual borrowers to lenders digitally.", ""])}
                                    >
                                        More info
                                    </button>
                                    <div class="px-6 pt-4 pb-2 text-center">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#peer2peer</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#finance</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#portfolio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='text-2xl font-bold text-white tracking-wider text-white'>
                            Impactp2p
                        </span>

                    </div>
                    {/* Project 2 
                    <div style={{ backgroundImage: `url(${edinfinity})`, backgroundSize: 'cover' }} className='grid gap-4 object-contain rounded-lg'>
                        {/* Card 
                        <div className='shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>
                            {/* Hover effect 
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    EDInfinity
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='https://www.financepeer.com/edinfinity/' target="_blank">
                                        <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                        </button>
                                    </a>
                                    <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold m-5'
                                        onClick={() => handleClick("EDInfinity", ["Financepeer is a platform that helps parents/students pay their fees in easy installments starting from 0% for a duration of up to 24 months.", "EDInfinity is the One stop solution for all your Learning."])}
                                    >
                                        More info
                                    </button>
                                    <div class="px-6 pt-4 pb-2 text-center">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#edtech</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#quizes</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#edcontent</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}

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


export default Experience