import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

const PopularPost = ({latestposts}) => {
    return (
        <>

<div className="bg-white rounded border border-blueGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14 aos-init aos-animate" data-aos="fade-up">
    
                     <h3 className="font-display text-3xl text-blueGray-900 font-bold mb-6">Popular Posts </h3>

  { latestposts.map(latestpost =>( <div key={latestpost.id} className="flex items-center border-b border-blueGray-300 pb-4 mb-4">
                        <Image className="w-24 h-24 rounded object-cover flex-shrink-0"  src={latestpost.Postimage[0].url} width="96" height="96" alt="title" />
                                      <div className="pl-4">
                                    <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500"><Link href="/post/[slug]" as={`/post/${latestpost.slug}`}><a>{latestpost.Title}</a></Link>
                                    </h6>
                                    <p className="font-body text-sm text-blueGray-600 mt-2">{ moment(latestpost.published_at).format('DD MMMM YYYY')}</p>
                                    </div>
                            </div>)) }
            
        </div>
           </>
    )
}

export default PopularPost
