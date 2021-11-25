
import axios from 'axios'
import getconfig from 'next/config'
import SinglePost from 'components/SinglePost'


export default function Home({singleposts, allcategories, latestposts}) {

  return (
    <>
   
                 { singleposts.map(singlepost =>(
              
                <SinglePost key={singlepost.id} singlepost={singlepost} allcategories={allcategories} latestposts={latestposts} />

              ))}
       

</>


  )
}

const { publicRuntimeConfig } = getconfig()
export async function getServerSideProps(context){

                  const { slug } = context.query
                  const res = await axios.get(`${publicRuntimeConfig.API_URL}/posts?slug=${slug}`);
                  const getdata = res.data;

                  const allcategory = await axios.get(`${publicRuntimeConfig.API_URL}/categories`);
                  const getcategories = allcategory.data;

                  const latestpost = await axios.get(`${publicRuntimeConfig.API_URL}/posts?_sort=published_at:DESC&_limit=4`);
                  const getlatestpost = latestpost.data;
        

                  return {  props : {
                    singleposts: getdata,
                    allcategories: getcategories,
                    latestposts: getlatestpost
                  } };
      
}