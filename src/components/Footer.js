import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo/photosnapFooterLogo.svg';
import PortfolioLogo from '../../public/icon/sgwr_logo.svg';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const portfolioLink = "https://sushantgangwar.netlify.app/";
  const githubLink = "https://github.com/sushantgwr87";
  const linkedinLink = "https://www.linkedin.com/in/sushant-gangwar/";

  return (
    <footer className='footer'>
      <div className={styles.footerLogo}>
        <Image src={logo} alt='Logo' />
      </div>
      <ul className='footerNav'>
        <li>HOME</li>
        <li>STORIES</li>
        <li>FEATURES</li>
        <li>PRICING</li>
      </ul>
      <button className='footerInviteButton'>GET AN INVITE</button>
      <div className="outLinks">
        <Link href={portfolioLink} target="_blank" rel="noopener noreferrer">
          <a className="portfolio">
            <Image src={PortfolioLogo} alt='Portfolio Logo' />
          </a>
        </Link>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <a className="github">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </a>
        </Link>
        <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <a className="linkedin">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
              <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" />
            </svg>
          </a>
        </Link>
      </div>
      <div className='copyright'>
        <h3>Copyright 2022. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;