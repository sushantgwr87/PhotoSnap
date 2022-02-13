import React from 'react';
import Image from 'next/image';
import SVGIcon from '../../src/components/SVGIcon';

const Story = () => {
  return (
    <>
      <section className='story'>
        <div className="story_image_container">
          <div className='story_image'>
            <Image layout='fill' src={'/assets/adventure.jpg'} alt='Story_Image' />
          </div>
          <div className="story_arrow">
            <SVGIcon name='arrow' fill='#fff' width='50px' transform='rotate(90)' />
          </div>
        </div>
        <div className='story_content'>
          <h3>hazy full moon of appalachia</h3>
          <span>by Joseph D&apos;zuza</span>
          <p>The app we&apos;re building today is called the Macro Compliance Tracker. If you&apos;re like me, you probably had a New Years Resolution of I&apos;m going to get in better shape This year, I am taking that resolution seriously, and have gotten a person trainer and nutritionist. One interesting thing that I learned is that while the old adage of calories in needs to be less than calories out to lose weight is generally true, your macronutrients also play just as an important role in weight loss.There are many great apps that help you track your calories and macros. Unfortunately, most apps do not allow you to track a range and another interesting thing that I learned in my fitness journey this year is that for many beginners trying to hit their daily macro goals is a challenge and many folks end up giving up when they fail to hit the exact targets consistently. For that reason, my coach suggests a target range for calories and macros rather than a hard set number.</p>
        </div>
      </section>
    </>
  )
}

Story.displayName = "Story";

export default Story;