import React from 'react'
import RightsideCategory from './RightsideCategory'
import Title from './Title'
import Longdesc from './Longdesc'
import PopularPost from './PopularPost'

const SinglePost = ({ singlepost, allcategories, latestposts}) => {
  
    return (
        <>

      <Title singlepost={singlepost} />

      <section className="blog-section mb-20 lg:mb-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className="lg:col-span-7 xl:col-span-8">


               <Longdesc singlepost={singlepost} />
          
     
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

