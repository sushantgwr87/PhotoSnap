import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Grid.module.css';

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
]

const HomeImageGrid = () => {
  return (
    <div className={styles.image_grid_container}>
      {griddata.map((value, index) => (
        <div className={styles.image_grid} key={index}>
          {console.log(value)}
          <div className={styles.grid_content}>
            <h3>{value.title}</h3>
            <p>{value.author}</p>
            <button>Read</button>
          </div>
          <div className={styles.grid_photo}>
            <Image layout='fill' src={value.path} alt='Grid Image' />
            {/* <img src={value.path} alt='Grid Image' /> */}
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default HomeImageGrid;
