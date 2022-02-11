import React from 'react';
import Card from '../src/components/card';
import SVGIcon from '../src/components/SVGIcon';
import card_Image from '../public/assets/feature.jpg';
import useBreakpoints from '../src/customHook/useBreakpoints';

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
    },
    {
        icon: "domain",
        head: "Custom domain",
        body: "We provide custom domain to host your stories separately to each user."
    },
    {
        icon: "experience",
        head: "Enhance your experience",
        body: "Experience a better way to pen down your beautiful story and read the same from others."
    },
    {
        icon: "image_crop",
        head: "Drag & Crop images",
        body: "Our website provide ability to drag and crop the images as per your need for your stories."
    },
]

const featureCardData = {
    head: "Features",
    body: "We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wannted to share their stories."
}

const Features = () => {
    const { isXs } = useBreakpoints();

    return (
        <>
            <section>
                <Card
                    imagePath={card_Image}
                    cardHead={featureCardData.head}
                    cardBody={featureCardData.body}
                    isdark={true}
                    isbutton={false}
                />
            </section>
            <section>
                <div className='features_page'>
                    {featuredata.map((value, index) => (
                        <div className="features_page___feature" key={index}>
                            <SVGIcon name={value.icon} width={isXs ? '100px' : '150px'} height={isXs ? '100px' : '150px'} />
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

Features.displayName = "Features"

export default Features;