import React from 'react';
import Image from 'next/image';
import SVGIcon from '../src/components/SVGIcon';
import card_Image from '../public/assets/stories.jpg';

const Home = () => {
  return (
    <>
      <section className="introduction">
        <div className="introduction_card">
          <div className="introduction_card_content">
            <h3>create and share your photo stories.</h3>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
            <button>
              <span>Get an invite</span>
              <div className="arrow">
                <SVGIcon name="arrow" fill={'#fff'} />
              </div>
            </button>
          </div>
          <div className="introduction_card_photo">
            {/* <img src={card_Image} alt='photo' /> */}
            <Image layout='fill' src={card_Image} alt='Card Image' />
          </div>
        </div>
        <div className="introduction_card">
          <div className="introduction_card_content">
            <h3>create and share your photo stories.</h3>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
            <button>
              <span>Get an invite</span>
              <div className="arrow">
                <SVGIcon name="arrow" fill={'#fff'} />
              </div>
            </button>
          </div>
          <div className="introduction_card_photo">
            <Image layout='fill' src={card_Image} alt='Card Image' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;