import React from 'react';
import Image from 'next/image';
import ImageGrid from '../src/components/ImageGrid';
import Icon from '../src/components/Icon';
import Link from 'next/link';

const Stories = ({snaps}) => {

  const featuredSnap = snaps[0];

  const otherSnaps =  snaps.filter((val,index)=> index>0);

  return (
    <>
      <section className='stories_featured'>
        <div className='stories_featured_image'>
          <Image layout='fill' src={featuredSnap.path} alt='Story_Image' />
        </div>
        <div className='stories_featured_content'>
          <h3>{featuredSnap.title}</h3>
          <span>by {featuredSnap.author}</span>
          <p>{featuredSnap.body && featuredSnap.body.length > 300 ? `${featuredSnap.body.substring(0, 300)}...` : featuredSnap.body}</p>
          <Link href={'/story/'+featuredSnap._id} passHref>
            <a>
              <div className='stories_featured_content___read_btn card_btn___hover'>
                <span>Read the Story</span>
                <div className="arrow">
                  <Icon name="arrow" fill={'#fff'} />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
      <section>
        <ImageGrid gridData={otherSnaps} />
      </section>
    </>
  );
};

Stories.displayName = "Stories";

export default Stories;

export async function getStaticProps() {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          snaps: data['message'],
      },
  };
}