import React from 'react'

const CategoryTitle = ({posttitle}) => {

    return (
        <>


<section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
         <div className="container mx-auto relative px-4 z-10">
            <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">{posttitle.Title}</h2>
         
         </div>
      </section>
            
        </>
    )
}

export default CategoryTitle
