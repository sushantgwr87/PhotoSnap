import React from 'react';
import SVGIcon from '../src/components/SVGIcon';
import ImageGrid from '../src/components/ImageGrid';
import Card from '../src/components/card';

const featuredata = [
  {
    icon: "responsive",
    head: "100% Responsive",
    body: "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
  },
  {
    icon: "infinite",
    head: "No photo upload limit",
    body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
  },
  {
    icon: "social",
    head: "Available to Embed",
    body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps and more."
  }
]

const introductionData = [
  {
    path: '/assets/adventure.jpg',
    head: 'create and share your photo stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    buttonText: 'Get an invite'
  },
  {
    path: '/assets/camera.jpg',
    head: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text and embed media from other networks, Then share your story with everyone',
    buttonText: 'View the Stories'
  },
  {
    path: '/assets/video.jpg',
    head: 'Designed for Everyone',
    body: 'Photosnap can help you create stories that resonates with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
    buttonText: 'View the Stories'
  },
]

const Home = ({snaps}) => {

  return (
    <>
      <section className="introduction">
        {introductionData.map((value, index) => (
          <Card
            imagePath={value.path}
            cardHead={value.head}
            cardBody={value.body}
            isdark={index > 0 ? false : true}
            isModal={index==0 && true}
            isreverse={index == 1 && true}
            buttonText={value.buttonText}
            key={index}
          />
        ))
        }
      </section>
      <section>
        <ImageGrid gridData={snaps} />
      </section>
      <section>
        <div className='features'>
          {featuredata.map((value, index) => (
            <div className="feature" key={index}>
              <SVGIcon name={value.icon} width='100px' height='100px' />
              <h3>{value.head}</h3>
              <p>{value.body}</p>
            </div>
          ))
          }
        </div>
      </section>
    </>
  );
};

Home.displayName = "Home";

export default Home;

export async function getStaticProps() {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps?limit=4`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          snaps: data['message'],
      },
  };
}