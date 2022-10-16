import React,  { useState }  from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import ANLogo from '../assets/ANLogo.png'


function Navbar() {
    const [toggleNav, setNav] = useState(false)
    const handleClick =()=> setNav(!toggleNav)
    // https://www.color-name.com/matte-black.color
    return (
        <div className='fixed w-full h-[80px] flex justify-between bg-slate-800 text-gray-300 items-center'>
            <div className='px-5'>
                    <img src={ANLogo} alt="AN" width="60" height="40"/>
            </div>
            {/* Menu */}
            <div>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className='md:hidden z-10 p-3 cursor-pointer text-2xl' onClick={handleClick}>
                {!toggleNav ? <FaBars /> : <FaTimes/> }
            </div>
            {/* Mobile menu */}
            <div className={!toggleNav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#020202] flex flex-col items-center justify-center'}>
                <ul>
                    <li className='py-6 text-3xl'>Home</li>
                    <li className='py-6 text-3xl'>About</li>
                    <li className='py-6 text-3xl'>Experience</li>
                    <li className='py-6 text-3xl'>Projects</li>
                    <li className='py-6 text-3xl'>Contact</li>
                </ul>
            </div>

            {/* Side links */}
            <div className='flex fixed flex-col top-[50%] right-0'>
                <ul>
                    <li className='w-[60px] h-[50px] flex justify-between items-center bg-[#0077b5] ml-[0px] duration-300'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                            href='https://linkedin.com/in/akshay-narkhede' target="_blank"> <FaLinkedin size={100}/></a>
                    </li>
                    <li className='w-[60px] h-[50px] flex justify-between items-center bg-[#333333] ml-[0px] duration-300'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/akshay1311' target="_blank"> <FaGithub size={100}/></a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar
