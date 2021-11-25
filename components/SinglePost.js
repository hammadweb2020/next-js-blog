import React from 'react'
import RightsideCategory from './RightsideCategory'
import Title from './Title'
import Longdesc from './Longdesc'
import PopularPost from './PopularPost'
import Image from 'next/image'

const SinglePost = ({ singlepost, allcategories, latestposts}) => {
  
    return (
        <>

      <Title singlepost={singlepost} />

      <section className="blog-section mb-20 lg:mb-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className="lg:col-span-7 xl:col-span-8">


               <Longdesc singlepost={singlepost} />
          
               <div className="entry-author bg-white rounded shadow transition duration-500 hover:shadow-lg flex justify-between px-6 py-12 mb-8 lg:mb-14">
                     <Image className="w-16 h-16 lg:w-28 lg:h-28 object-cover rounded-full" src="/images/hammad.jpg" width="112" height="112" alt="title" />
                     <div className="pl-6">
                        <h4 className="font-display text-xl text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500"><a href="/light/creator-published">Hammad Siddique</a></h4>
                        <p className="font-body text-blueGray-600 mt-2">If you are looking for someone who can do design magic to your website, meet Hammad.<br /> A senior-level Web Developer who comes with unrivaled knowledge on<br /> Website Development, UI/UX, analytics and everything web. </p>
                     </div>
                  </div>
               </div>
           
              


               <div className="lg:col-span-5 xl:col-span-4">

               <PopularPost latestposts={latestposts} /> 
                <RightsideCategory allcategories={allcategories} />


               
              
               </div>




            </div>
         </div>
      </section>






</>
    )
}
export default SinglePost

