import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Grid.module.css';
import SVGIcon from './SVGIcon';
import Link from 'next/link';

const ImageGrid = ({ gridData }) => {
  
  return (
    <div className={styles.image_grid_container}>
      {gridData.map((value, index) => (
        <div className={styles.image_grid___link} key={index}>
          <Link href={'/story/'+value._id} passHref>
            <a>
              <div className={styles.image_grid} key={index}>
                <div className={styles.grid_photo}>
                  <Image layout='fill' src={value.path} alt='Grid Image' />
                </div>
                <div className={styles.grid_content}>
                  <h3>{value.title}</h3>
                  <p>by {value.author}</p>
                  <hr />
                    <div className={styles.grid_content___read_btn}>
                      <span>Read Story</span>
                      <div className="arrow">
                        <SVGIcon name="arrow" fill={'#fff'} />
                      </div>
                    </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))
      }
    </div>
  );
};

export default ImageGrid;