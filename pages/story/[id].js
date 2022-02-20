import React from 'react';
import Image from 'next/image';
import SVGIcon from '../../src/components/SVGIcon';
// import { getSnapData } from '../../lib/snapsData';

export const getStaticPaths = async () =>{
 
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps`);
  // extract the data
  let data = await response.json();
  // console.log(data);

  const paths = data.message.map(snap=> {
    return {
      params: {id: snap._id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps= async (context) => {
  const id = context.params.id;
  console.log(id);
  // let dev = process.env.NODE_ENV !== 'production';
  // let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps`,{
    method: 'GETID',
    body: id
  });
  // extract the data
  console.log(response);
  let data = await response.json();

  return {
    props: {
      snap: data
    }
  }
}

const Story = ({snap}) => {
  return (
    <>
      <section className='story'>
        <div className="story_image_container">
          <div className='story_image'>
            <Image layout='fill' src={snap.path} alt='Story_Image' />
          </div>
          <div className="story_arrow">
            <SVGIcon name='arrow' fill='#fff' width='50px' transform='rotate(90)' />
          </div>
        </div>
        <div className='story_content'>
          <h3>{snap.title}</h3>
          <span>{snap.author}</span>
          <p>{snap.body}</p>
        </div>
      </section>
    </>
  )
}

Story.displayName = "Story";

export default Story;