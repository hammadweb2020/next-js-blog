
import axios from 'axios'
import CategoryCard from 'components/CategoryCard'
import CategoryTitle from 'components/CategoryTitle'
import getconfig from 'next/config'
export default function Home({posts}) {

  return (
    <>


{ posts.map(posttitle =>(

<CategoryTitle key={posttitle.id} posttitle={posttitle}/>

))}

<section className="blog-section mb-20 lg:mb-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
   { posts.map(post =>(

  <CategoryCard key={post.id} post={post.posts}/>

))}

</div>
</div>
</section>



    </>
   
 
   
  )

}

const { publicRuntimeConfig } = getconfig()
export async function getServerSideProps(context){

               
                  const { slug } = context.query

                  const res = await axios.get(`${publicRuntimeConfig.API_URL}/categories?slug=${slug}`);
                  const getdata = res.data;
                  return {  props : {
                    posts: getdata
                  } };
            


         


}