import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

const CategoryCard = ({ post }) => {
    return (
        <>

{ post.map(allpost =>(
      <div key={allpost.id} className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg aos-init aos-animate" data-aos="fade-up">
                  <div className="content-top">
                     <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                     <Link href="/post/[slug]" as={`/post/${allpost.slug}`}><a><Image className="w-full md:h-64 object-cover" src={allpost.Postimage[0].url} width="419" height="256" alt="title" /></a></Link>
                     </div>
                     <div className="blog-content px-6">
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><Link href="/post/[slug]" as={`/post/${allpost.slug}`}><a>{allpost.Title}</a></Link></h3>
                        <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                           <p className="mr-4"><Image className="w-4 h-4 inline-block mr-1" src="/images/date-icon.svg"  width="16" height="16" alt="title" /> { moment(allpost.published_at).format('DD MMMM YYYY')}</p>
                         
                        </div>
                        <p className="font-body text-blueGray-600 mb-5">{allpost.ShortDescription}</p>
                     </div>
                  </div>
                  <div className="content-bottom px-6 pb-6">
                  <Link href="/post/[slug]" as={`/post/${allpost.slug}`}><a className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover" >Read More<Image className="inline-block w-3 ml-2 mb-1" src="/images/readmore-icon.svg"  width="12" height="13" alt="Read More" /></a></Link>
                  </div>
               </div>
                
))}

        </>
    )
}
export default CategoryCard