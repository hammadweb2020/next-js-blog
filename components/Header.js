import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (
        <div>
        <div className="cursor-direction bg-indigo-100"></div>
    
      <header className="header-area absolute w-full top-0 pt-4 pb-10">
         <div className="container mx-auto relative px-4 z-20">
            <nav className="flex items-center justify-between relative">
            <Link href="/">
               <a  className='flex items-center flex-shrink-0 mr-6'>
               <Image className="h-10" src="/images/header-logo.svg" width="190" height="40" alt="title" />
               </a>
               </Link>
               <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
                  <ul className="mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 hidden lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover">
                     <li className="relative dropdown lg:mr-4">
                        <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow"> Home <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                        <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Home v1</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Home v2</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Home v3</a></li>
                        </ul>
                     </li>
                     <li className="relative dropdown lg:mr-4">
                        <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow" > Explore <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                        <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Explore v1</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Explore v2</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500'> Item Details v1</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Item Details v2</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Item Details v3</a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Wallet</a></li>
                        </ul>
                     </li>
                     <li className="relative dropdown lg:mr-4">
                        <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow" > Pages <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                        <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Create Item </a></li>
                           <li className="relative dropdown">
                              <a className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow" > Authors <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                              <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Authors</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Authors Profile</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Authors Activity</a></li>
                              </ul>
                           </li>
                           <li className="relative dropdown">
                              <a className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow" > User <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                              <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Login</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Register</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Forget Password</a></li>
                              </ul>
                           </li>
                           <li className="relative dropdown">
                              <a className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow"> Blog <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                              <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Blog Details</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Category</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500'>Tag</a></li>
                                 <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' >Blog Grid</a></li>
                              </ul>
                           </li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Contact </a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > Term & Condition </a></li>
                           <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' > 404 </a></li>
                        </ul>
                     </li>
                     <li><a className='p-4 flex items-center hover:text-indigo-500 transition duration-500' > Activity </a></li>
                  </ul>

                      </div>
               <button className="bg-blueGray-50 mobile-toggle block lg:hidden">
                  <span className="bg-blueGray-600"></span>
                  <span className="bg-blueGray-600"></span>
                  <span className="bg-blueGray-600"></span>  
               </button> 
            </nav>
         </div>
      </header>
        </div>
    )
}
