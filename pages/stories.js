import React from 'react';
import Image from 'next/image';
import ImageGrid from '../src/components/ImageGrid';
import SVGIcon from '../src/components/SVGIcon';
import Link from 'next/link';

const featuredStory = {
  id: 1,
  body: "All. Air them seas saying evening male rule. Our beginning light seas that life morning was Moveth. Brought two man created which waters. Behold. Gathering good fill given. Saw own you're yielding let have. Under brought open creepeth creeping creature gathered Own let. One Blessed isn't sea. Behold upon void lesser together. Rule. Upon, sea day won't herb. Image beast you're light bring saying third tree man sea meat waters, greater creature won't void of abundantly blessed set above them after cattle spirit blessed brought fill. And bearing night cattle us upon be god wherein firmament life darkness, fruitful. Replenish.",
  title: "hazy full moon of appalachia",
  author: "Joseph D'zuza",
  path: "/upload/adventure.jpg"
}

const Stories = ({snaps}) => {
  return (
    <>
      <section className='stories_featured'>
        <div className='stories_featured_image'>
          <Image layout='fill' src={'/assets/adventure.jpg'} alt='Story_Image' />
        </div>
        <div className='stories_featured_content'>
          <h3>{featuredStory.title}</h3>
          <span>by {featuredStory.author}</span>
          <p>{featuredStory.body && featuredStory.body.length > 300 ? `${featuredStory.body.substring(0, 300)}...` : featuredStory.body}</p>
          <Link href={'/story/'+featuredStory.id} passHref>
            <a>
              <div className='stories_featured_content___read_btn'>
                <span>Read the Story</span>
                <div className="arrow">
                  <SVGIcon name="arrow" fill={'#fff'} />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
      <section>
        <ImageGrid gridData={snaps} />
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