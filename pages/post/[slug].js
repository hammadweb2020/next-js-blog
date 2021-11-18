
import axios from 'axios'
import getconfig from 'next/config'
import SinglePost from 'components/SinglePost'

export default function Home({singleposts}) {

  return (
    <>
   
                 { singleposts.map(singlepost =>(
                <SinglePost key={singlepost.id} singlepost={singlepost} />

              ))}
</>


  )
}

const { publicRuntimeConfig } = getconfig()
export async function getServerSideProps(context){

                  const { slug } = context.query
                  const res = await axios.get(`${publicRuntimeConfig.API_URL}/posts?slug=${slug}`);
                  const getdata = res.data;
                  return {  props : {
                    singleposts: getdata
                  } };
      
}