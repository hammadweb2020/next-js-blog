import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
   
 
   <section className="hero-section relative hero-shape pt-40 pb-24 lg:pt-64 lg:pb-56">
         <div className="container mx-auto relative px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
               <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
                  UAE TOWN TALK.</h1>
               <p className="text-xl font-body font-normal text-blueGray-600 mb-4">Frontend Developed in NEXT.JS<br />Backend API Developed in Strapi - Headless CMS</p>
               <div className="flex flex-wrap items-center justify-center">

               </div>
            </div>
         </div>
      </section>

      <section className="product-section relative">
         <div className="container mx-auto relative px-4 z-10">
            <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-6 lg:mb-8">
               <div><h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">Latest Stories</h3>
                  <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg"></span></div>
            </div>
    </div>
    </section>

    <section className="blog-section mb-20 lg:mb-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
               <div className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg aos-init aos-animate" data-aos="fade-up">
                  <div className="content-top">
                     <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                        <Image className="w-full md:h-64 object-cover" src="/images/5.jpg" width="419" height="256" alt="title" />
                     </div>
                     <div className="blog-content px-6">
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href="/light/single">Mindfulness Activities for Kids &amp; Toddlers with NFT</a></h3>
                        <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                           <p className="mr-4"><Image className="w-4 h-4 inline-block mr-1" src="/images/date-icon.svg"  width="16" height="16" alt="title" /> 02 Feb 2022</p>
                         
                        </div>
                        <p className="font-body text-blueGray-600 mb-5">Poster to so only as who go accompany texts recommendation</p>
                     </div>
                  </div>
                  <div className="content-bottom px-6 pb-6">
                     <a className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover" href="/light/single">Read More<Image className="inline-block w-3 ml-2 mb-1" src="/images/readmore-icon.svg"  width="12" height="13" alt="title" /></a>
                  </div>
               </div>
            
         
             
            </div>
       
         </div>
      </section>











    </div>
  )
}
