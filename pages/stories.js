import React from 'react';
import Image from 'next/image';
import ImageGrid from '../src/components/ImageGrid';
import SVGIcon from '../src/components/SVGIcon';

const griddata = [
    {
      title: "Mountain",
      author: "Joseph D'zuza",
      path: "/upload/adventure.jpg"
    },
    {
      title: "River",
      author: "Andrew Garfield",
      path: "/upload/building_day2.jpg"
    },
    {
      title: "Building",
      author: "Tobey Megouer",
      path: "/upload/ice.jpg"
    },
    {
      title: "Wild Venture",
      author: "Benjamin Franklin",
      path: "/upload/tiger.jpg"
    },
    {
      title: "Mountain",
      author: "Joseph D'zuza",
      path: "/upload/adventure.jpg"
    },
    {
      title: "River",
      author: "Andrew Garfield",
      path: "/upload/building_day2.jpg"
    },
    {
      title: "Building",
      author: "Tobey Megouer",
      path: "/upload/ice.jpg"
    },
  ]

const Stories = () => {
    return (
        <>
            <section className='stories_featured'>
                <div className='stories_featured_image'>
                    <Image layout='fill' src={'/assets/adventure.jpg'} alt='Story_Image' />
                </div>
                <div className='stories_featured_content'>
                    <h3>hazy full moon of appalachia</h3>
                    <span>by Joseph D&apos;zuza</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi sint earum alias quos sequi nostrum dolorum dolorem quidem voluptates? Molestias tempore, omnis aliquid expedita dolorum cupiditate explicabo officia beatae.</p>
                    <button className='stories_featured_content___read_btn'>
                        <span>Read the Story</span>
                        <div className="arrow">
                            <SVGIcon name="arrow" fill={'#fff'} />
                        </div>
                    </button>
                </div>
            </section>
            <section>
              <ImageGrid gridData={griddata} />
            </section>
        </>
    );
};

Stories.displayName = "Stories";

export default Stories;