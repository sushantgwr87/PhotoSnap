import React from 'react';
import Image from 'next/image';

const Story = () => {
  return (
    <>
      <section>
        <div className='story_image'>
          <Image layout='fill' src={'/assets/adventure.jpg'} alt='Story_Image' />
        </div>
      </section>
    </>
  )
}

Story.displayName = "Story";

export default Story