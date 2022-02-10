import React from 'react';
import SVGIcon from '../src/components/SVGIcon';
import cardImage1 from '../public/assets/adventure.jpg'
import cardImage2 from '../public/assets/camera.jpg'
import cardImage3 from '../public/assets/video.jpg'
import HomeImageGrid from '../src/components/HomeImageGrid';
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
    path: cardImage1,
    head: 'create and share your photo stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    buttonText: 'Get an invite'
  },
  {
    path: cardImage2,
    head: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text and embed media from other networks, Then share your story with everyone',
    buttonText: 'View the Stories'
  },
  {
    path: cardImage3,
    head: 'Designed for Everyone',
    body: 'Photosnap can help you create stories that resonates with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
    buttonText: 'View the Stories'
  },
]

const Home = () => {

  return (
    <>
      <section className="introduction">
        {introductionData.map((value, index) => (
          <Card
            imagePath={value.path}
            cardHead={value.head}
            cardBody={value.body}
            isdark={index > 0 ? false : true}
            isreverse={index == 1 && true}
            buttonText={value.buttonText}
            key={index}
          />
        ))
        }
      </section>
      <section>
        <HomeImageGrid />
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

export default Home;
// import React from "react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// export default function Page() {
//   // const [session, loading] = useSession();
//   const { data: session, status } = useSession()
// const loading = status === "loading";
// const authenticated = status === "authenticated";

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       {!authenticated && (
//         <>
//           Not signed in <br />
//           <button onClick={signIn}>Sign in</button>
//         </>
//       )}
//       {authenticated && (
//         <>
//           Signed in as {session.user.name} <br />
//           <button onClick={signOut}>Sign out</button>
//         </>
//       )}
//       <div>
//         <Link href="/private">
//           <a>Go to private page</a>
//         </Link>
//       </div>
//     </>
//   );
// }