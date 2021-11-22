import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Title = ({singlepost}) => {
    return (
        <>

<section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
         <div className="container mx-auto relative px-4 z-10">
            <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">{singlepost.Title}</h2>

            <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
               <li className="flex items-center mr-2"><Link as="/" href="/"><a className="transition duration-500 hover:text-indigo-500 underline-hover" > Home</a></Link></li>
               <li className="flex items-center mr-2"><Image className="w-3 h-3 inline-block mr-2" width="12" height="12" src="/images/right-arrow.svg" alt="title" /><Link as={`/category/${singlepost.categories[0].slug}`} href="/category/[slug]" ><a className="transition duration-500 hover:text-indigo-500 underline-hover ml-2" > {singlepost.categories[0].Title}</a></Link></li>
               <li className="flex items-center text-indigo-500 mr-2"><Image className="w-3 h-3 inline-block mr-2"  width="12" height="12"  src="/images/right-arrow.svg" alt="title" /><span className="ml-2"> {singlepost.Title}</span></li>
            </ul>
         </div>
      </section>


            
        </>
    )
}

export default Title
