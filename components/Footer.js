import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
    return (
        <div>
            
            <footer className="footer-section overflow-hidden">
      <div className="relative footer-shape2 py-20 lg:py-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
               <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
                  <a href='/light/' className='block mb-10'>
                  <Image className="h-10" src="/images/header-logo.svg" width="190"  height="40" alt="title" />
                  </a>
                  <div className="social-share flex items-center"> 
                     <a className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2" href="#"><Image className="w-4 h-4" width="17" height="17" src="/images/facebook-icon.svg" alt="title" /></a>
                     <a className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2" href="#"><Image className="w-4 h-4"  width="17" height="17" src="/images/twitter-icon.svg" alt="title" /></a>
                     <a className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2" href="#"><Image className="w-4 h-4"  width="17" height="17" src="/images/instagram-icon.svg" alt="title" /></a>
                     <a className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2" href="#"><Image className="w-4 h-4"  width="17" height="17" src="/images/linkein-icon.svg" alt="title" /></a>
                  </div>
               </div>
               <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                  <h4 className="font-display text-xl text-blueGray-900 font-semibold">Navigation</h4>
                  <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/'>Home</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/explore'>Explore</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/wallet'>Wallet</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/creator-published'>Author</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/term-condition'>Terms & Conditions</a></li>
                  </ul>
               </div>
               <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                  <h4 className="font-display text-xl text-blueGray-900 font-semibold">Community</h4>
                  <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/item-single'>Item Details</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/item-single2'>Item Details v2</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/activity'>Activity</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/term-condition'>Terms & Conditions</a></li>
                     <li className="mb-4 mr-4"><a className='font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover' href='/light/contact'>Contact</a></li>
                  </ul>
               </div>
            
            </div>
         </div>
         </div>
         <div className="container mx-auto relative px-4 z-10 lg:text-center py-10 xl:py-20">
            <p className="font-body text-sm text-blueGray-600">© <span id="spanYear">2021</span> Hammad Siddique - All Rights Reserved by <a href="https://hammad.pro/" className="text-indigo-500 underline-hover" rel="noopener noreferrer" target="_blank">hammad.pro</a></p>
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
