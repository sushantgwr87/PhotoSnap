import React from 'react';
import Image from 'next/image';
import SVGIcon from '../src/components/SVGIcon';
import card_Image1 from '../public/assets/adventure.jpg';
import card_Image2 from '../public/assets/camera.jpg';
import card_Image3 from '../public/assets/video.jpg';
import useBreakpoints from '../src/customHook/useBreakpoints';
import HomeImageGrid from '../src/components/HomeImageGrid';

const Home = () => {
  const { isSm } = useBreakpoints();

  return (
    <>
      <section className="introduction">
        <div className="introduction_card">
          <div className="introduction_card_photo">
            <Image layout={isSm ? 'responsive' : 'fill'} src={card_Image1} alt='Card Image' />
          </div>
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
        </div>
        <div className="introduction_card">
          <div className="introduction_card_photo">
            <Image layout={isSm ? 'responsive' : 'fill'} src={card_Image2} alt='Card Image' />
          </div>
          <div className="introduction_card_content">
            <h3>Beautiful stories every time</h3>
            <p>We provide design templates to ensure your stories look terrific. Easily add photos, text and embed media from other networks, Then share your story with everyone</p>
            <button>
              <span>View the Stories</span>
              <div className="arrow">
                <SVGIcon name="arrow" fill={'#000'} />
              </div>
            </button>
          </div>
        </div>
        <div className="introduction_card">
          <div className="introduction_card_photo">
            <Image layout={isSm ? 'responsive' : 'fill'} src={card_Image3} alt='Card Image' />
          </div>
          <div className="introduction_card_content">
            <h3>Designed for Everyone</h3>
            <p>Photosnap can help you create stories that resonates with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
            <button>
              <span>View the Stories</span>
              <div className="arrow">
                <SVGIcon name="arrow" fill={'#000'} />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section>
        <HomeImageGrid />
      </section>
    </>
  );
};

export default Home;