import React from 'react';
import Image from 'next/image';
import ImageGrid from '../src/components/ImageGrid';
import SVGIcon from '../src/components/SVGIcon';
import Link from 'next/link';

// const griddata = [
//   {
//     id: 1,
//     body: "All. Air them seas saying evening male rule. Our beginning light seas that life morning was Moveth. Brought two man created which waters. Behold. Gathering good fill given. Saw own you're yielding let have. Under brought open creepeth creeping creature gathered Own let. One Blessed isn't sea. Behold upon void lesser together. Rule. Upon, sea day won't herb. Image beast you're light bring saying third tree man sea meat waters, greater creature won't void of abundantly blessed set above them after cattle spirit blessed brought fill. And bearing night cattle us upon be god wherein firmament life darkness, fruitful. Replenish.",
//     title: "hazy full moon of appalachia",
//     author: "Joseph D'zuza",
//     path: "/upload/adventure.jpg"
//   },
//   {
//     id: 2,
//     body: "Moved. Moving good land he gathered morning two multiply meat creepeth kind. Deep waters herb there herb may form, fruit from. Him light fish for. Greater fish it god first herb isn't darkness from stars Wherein unto seas she'd you'll he under evening was creepeth tree creature behold firmament face life. Fourth let seasons. Heaven waters to fish lights the fruit thing sixth don't over fruitful grass void moved Sixth itself which. Land midst to greater make there every fish Saw our moveth place two lights female called them. Appear darkness kind evening i fourth and our fill after you're.",
//     title: "River",
//     author: "Andrew Garfield",
//     path: "/upload/building_day2.jpg"
//   },
//   {
//     id: 3,
//     body: "Said saying from open waters abundantly saw said bring a greater fill all. Hath upon of subdue dry midst shall fill given it kind also. Subdue, creature Divide second. Tree. Fruitful life night of divide male cattle be creepeth. Seed kind multiply heaven moved third isn't dominion, fourth itself own life image very brought firmament them together isn't and us fruitful fourth rule there kind whose can't lights. Their under own and wherein great isn't two appear very there heaven appear place meat fowl night first place evening. Won't Without winged image be. Appear a herb so bring above stars.",
//     title: "Building",
//     author: "Tobey Megouer",
//     path: "/upload/ice.jpg"
//   },
//   {
//     id: 4,
//     body: "Abundantly you'll land can't. In firmament open unto spirit appear upon living behold after. Together hath from living two grass them fourth deep abundantly multiply herb morning every behold greater, let multiply Creepeth their open He make. Creepeth give created heaven fruitful made likeness spirit creeping creepeth saw us open day morning brought itself god said the. Air kind so. Firmament yielding stars, gathering he under darkness created fourth. Appear dominion fowl. Form together form. Signs saying forth the bearing beast open image moving together. Set, fly behold land seed cattle, dry. Yielding him creature divided forth give green whose.",
//     title: "Wild Venture",
//     author: "Benjamin Franklin",
//     path: "/upload/tiger.jpg"
//   },
//   {
//     id: 5,
//     body: "Abundantly you'll land can't. In firmament open unto spirit appear upon living behold after. Together hath from living two grass them fourth deep abundantly multiply herb morning every behold greater, let multiply Creepeth their open He make. Creepeth give created heaven fruitful made likeness spirit creeping creepeth saw us open day morning brought itself god said the. Air kind so. Firmament yielding stars, gathering he under darkness created fourth. Appear dominion fowl. Form together form. Signs saying forth the bearing beast open image moving together. Set, fly behold land seed cattle, dry. Yielding him creature divided forth give green whose.",
//     title: "Mountain",
//     author: "Joseph D'zuza",
//     path: "/upload/adventure.jpg"
//   },
//   {
//     id: 6,
//     body: "Abundantly you'll land can't. In firmament open unto spirit appear upon living behold after. Together hath from living two grass them fourth deep abundantly multiply herb morning every behold greater, let multiply Creepeth their open He make. Creepeth give created heaven fruitful made likeness spirit creeping creepeth saw us open day morning brought itself god said the. Air kind so. Firmament yielding stars, gathering he under darkness created fourth. Appear dominion fowl. Form together form. Signs saying forth the bearing beast open image moving together. Set, fly behold land seed cattle, dry. Yielding him creature divided forth give green whose.",
//     title: "River",
//     author: "Andrew Garfield",
//     path: "/upload/building_day2.jpg"
//   },
//   {
//     id: 7,
//     body: "Abundantly you'll land can't. In firmament open unto spirit appear upon living behold after. Together hath from living two grass them fourth deep abundantly multiply herb morning every behold greater, let multiply Creepeth their open He make. Creepeth give created heaven fruitful made likeness spirit creeping creepeth saw us open day morning brought itself god said the. Air kind so. Firmament yielding stars, gathering he under darkness created fourth. Appear dominion fowl. Form together form. Signs saying forth the bearing beast open image moving together. Set, fly behold land seed cattle, dry. Yielding him creature divided forth give green whose.",
//     title: "Building",
//     author: "Tobey Megouer",
//     path: "/upload/ice.jpg"
//   },
// ]

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

export async function getStaticProps(context) {
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