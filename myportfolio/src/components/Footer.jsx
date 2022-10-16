import React from 'react'

const Footer = () => {
  return (
            <div className="flex flex-col justify-between text-center">
              <div className="sticky top-[100vh] bg-slate-800">
                <div style={{color:'white'}}>
                  Designed by Akshay &#169;{new Date().getFullYear()} 
                </div>
              </div>
            </div>

  )
}

export default Footer