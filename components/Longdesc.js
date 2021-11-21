import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const Longdesc = ({singlepost}) => {
   const markdown = singlepost.longdescription
    return (
        <>


<figure> <Image className="w-full rounded" src={singlepost.Postimage[0].url} width="870" height="514" alt="title" /></figure>
                  <div className="xl:flex items-center justify-between my-8">
                     <div className="flex items-center relative my-6">
                        <div className="flex flex-wrap items-center mr-10">
                           <Image className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="/images/user.png" width="32" height="32" alt="title" />
                           <div className="ml-2">
                             
                              <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500"><a>{singlepost.admin_user.firstname} {singlepost.admin_user.lastname}</a></h6>
                              <p className="font-body text-sm text-blueGray-600">Admin</p>
                           </div>
                        </div>
               
                     </div>
                     <div className="flex items-center relative my-6">
                        <div className="text-center lg:text-right">
                           <p className="block font-display text-blueGray-900 font-medium transition duration-500">Published on</p>
                           <p className="font-body text-blueGray-600">{ moment(singlepost.published_at).format('DD MMMM YYYY')}</p>
                        </div>
                        <div className="text-center lg:text-right ml-10">
                           <p className="block font-display text-blueGray-900 font-medium transition duration-500">Last Updated</p>
                           <p className="font-body text-blueGray-600">{ moment(singlepost.updatedAt).format('DD MMMM YYYY')}</p>
                        </div>
                     </div>
                  </div>
                  <div className="entry-content typofix mb-8 lg:mb-14" >
                  <ReactMarkdown  remarkPlugins={[remarkGfm]} >{markdown}</ReactMarkdown>
                  </div>
        

            
        </>
    )
}

export default Longdesc
