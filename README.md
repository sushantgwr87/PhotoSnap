<p align="center">
  <img src="https://img.shields.io/github/deployments/sushantgwr87/PhotoSnap/production?&labelColor=000000&label=Vercel&logo=Vercel&style=for-the-badge" width="200" />
</p>
&nbsp; 

<p align="center">
  <img src="https://img.shields.io/badge/-Nextjs-black?style=for-the-badge&logo=nextdotjs" alt="Nextjs" height="35">
  &nbsp; &nbsp; 
  <img src="https://img.shields.io/badge/-Reactjs-fafafa?style=for-the-badge&logo=react&logoColor=blue" alt="Reactjs" height="35">
  &nbsp; &nbsp; 
  <img src="https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3" alt="CSS" height="35">
  &nbsp; &nbsp; 
  <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript" alt="Javascript" height="35">
</p>

# Photosnap

A Dynamic Blogging website with image upload using Next.js and server side rendering.

## About Project

This project is a based on blog websites with image uploads to server and article or story writing about them by authors.

Currently only Admin(me) can upload image or complete article on this website. This project also uses **Next-auth** feature to provide login auth for Admin Login.
## Development Insights

This project uses SSR Environment with dynamic rendering of data.

### Re-usable Components

This time, instead of creating basic components like for different design a new different component, I rather created a complex yet simple to configure component which can be used as per design needs.

Check [Card Component](https://github.com/sushantgwr87/PhotoSnap/blob/main/src/components/Card.js) and [Icon Component](https://github.com/sushantgwr87/PhotoSnap/blob/main/src/components/Icon.js) for referrence.

### Custom Hooks

Instead of using CSS media queries and styling each component as per each screen size, I used custom media query hook to trigger rendering different styled component instead of bulking styling with media queries.

### Custom Icons

Normally i use SVG icons direct import in component as only footer or Navbar needs them but in this project it was different. Due to many icons or mock-ups involved as per design, I preferred more dynamic procedure.

I created single component to render those SVG Icons dynamically. All SVG Icons were broken down in parts to work according JSX format.

Check [Icon.js](https://github.com/sushantgwr87/PhotoSnap/blob/main/src/components/Icon.js) file for complete referrence.

## Documentation

This project was created using `create-next-app`. Please do read and follow [Next.js Docs](https://nextjs.org/docs) for complete understanding of working with Next.js framework.
