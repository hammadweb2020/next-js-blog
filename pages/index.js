
import axios from 'axios'
import Card from 'components/Card'

export default function Home({posts}) {

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
       
            { posts.map(post =>(
                <Card key={post._id} post={post} />

              ))}
         
             
            </div>
       
         </div>
      </section>

    </div>
  )
}


export async function getServerSideProps(){

                  const { API_URL } = process.env


                  const res = await axios.get(`${API_URL}/posts`);
                  const getdata = res.data;
                  return {  props : {
                    posts: getdata
                  } };
            


         


}