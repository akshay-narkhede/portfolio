import React from 'react'

const About = () => {
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
                      <p>Hi. I'm Akshay, nice to meet you. Please take a look around. dsjnuhb unsdn nn sinsi
                          s dnsd nsd nns dn sdin dsinisd nisd nid snids nds in sdjnds nnd sn dsd snds nids n
                          dsj sdnj dsnusd nbdsu hb hdsubh dsbd sub dsbdhs bd shb sdhuds bds ubhsd hbsd b sdbd s
                          nsn ns n sns dnsn ns ns ns n nusn uns</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About