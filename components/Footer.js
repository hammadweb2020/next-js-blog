import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
    return (
        <div>
            
            <footer className="footer-section overflow-hidden">

         <div className="container mx-auto relative px-4 z-10 lg:text-center py-10 xl:py-5">
            <p className="font-body text-sm text-blueGray-600">© <span id="spanYear">2021</span> Hammad Siddique - Developed by <a href="https://hammad.pro/" className="text-indigo-500 underline-hover" rel="noopener noreferrer" target="_blank">hammad.pro</a></p>
         </div>
         <a href="#" className="footer-back w-10 h-10 hidden fixed bottom-8 right-8 z-50 bg-blueGray-600 rounded-lg items-center justify-center"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L9 1L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </a>
            </footer>
      </div>

      )
}

export default Footer
