import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import getconfig from 'next/config'
import Image from 'next/image'
import axios from 'axios'
export default function RightsideCategory({ allcategories }) {

  
/*
    async function getNumber(slug){
 
    const { publicRuntimeConfig } = getconfig()
  const res =  await axios.get(`${publicRuntimeConfig.API_URL}/posts/count?categories.slug=${slug}`);
    const getdata = res.data;
//console.log(getdata);
  



}
*/

    return (
        <>





<div className="bg-white rounded border border-blueGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14 aos-init aos-animate" data-aos="fade-up">
                     <h3 className="font-display text-3xl text-blueGray-900 font-bold mb-6">Categories </h3>
                     <div className="block">

                   


                     { allcategories.map(allcategorie =>(
                      <Link key={allcategorie.id} as={`/category/${allcategorie.slug}`} href="/category/[slug]"><a  className="flex justify-between border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-indigo-500"><span>{allcategorie.Title}</span> <span></span></a></Link>
)) }



                           


                      
                     </div>

                  </div>
 


    


                


        </>
    )
}




