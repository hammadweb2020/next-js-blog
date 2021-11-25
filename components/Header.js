import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Header({ navigations }) {
    return (
        <div>
        <div className="cursor-direction bg-indigo-100"></div>
    
      <header className="header-area absolute w-full top-0 pt-4 pb-10">
         <div className="container mx-auto relative px-4 z-20">
            <nav className="flex items-center justify-between relative">
            <Link href="/">
               <a  className='flex items-center flex-shrink-0 mr-6'>
               <Image className="h-10" src="/images/header-logo.png" width="194" height="40" alt="title" />
               </a>
               </Link>
               <div className="w-full  lg:flex lg:items-center lg:w-auto">
                  <ul className="mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 hidden lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover">
                  <li><Link href='/'><a className='p-4 flex items-center hover:text-indigo-500 transition duration-500' > Home</a></Link></li>

                                { navigations.map(navigation =>(

                                <li key={navigation.id}><Link as={`/category/${navigation.slug}`} href="/category/[slug]" ><a className='p-4 flex items-center hover:text-indigo-500 transition duration-500' > {navigation.Title} </a></Link></li>

                                )) }


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
