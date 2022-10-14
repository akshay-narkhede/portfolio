import React from 'react'

const Footer = () => {
  return (
            <div class="flex flex-col h-screen justify-between text-center">
              <div class="sticky top-[100vh] bg-blue-500">Designed by Akshay &#169;{new Date().getFullYear()} </div>
            </div>

  )
}

export default Footer