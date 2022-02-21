import React from 'react';
import Image from 'next/image';
import SVGIcon from '../../src/components/SVGIcon';

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

  // request posts from api
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps?id=${id}`);
  // extract the data
  let data = await response.json();

  return {
    props: {
      snaps: data['message'],
    }
  }
}

const Story = ({snaps}) => {
  const snap=snaps[0];

  return (
    <>
      <section className='story'>
        <div className="story_image_container">
          <div className='story_image'>
            <Image layout='fill' src={snap.path} alt='Story_Image' />
          </div>
          <h3>PhotoSnap Presents This Story</h3>
          <div className="story_arrow">
            <SVGIcon name='arrow' fill='#fff' width='50px' transform='rotate(90)' />
          </div>
        </div>
        <div className='story_content'>
          <h3>{snap.title}</h3>
          <span>{snap.author}</span>
          {snap.body.split('\n').map((val,index)=><p key={index}>{val}</p>)}
        </div>
      </section>
    </>
  )
}

Story.displayName = "Story";

export default Story;