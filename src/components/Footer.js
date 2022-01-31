import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import SVGIcon from '../../src/components/SVGIcon';

const Footer = () => {
  const portfolioLink = "https://sushantgangwar.netlify.app/";
  const githubLink = "https://github.com/sushantgwr87";
  const linkedinLink = "https://www.linkedin.com/in/sushant-gangwar/";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <SVGIcon name="photosnap" fill={'#fff'} />
      </div>
      <div className={styles.outLinks}>
        <Link href={portfolioLink}>
          <a target="_blank" rel="noopener noreferrer">
            <SVGIcon name="sgwr" fill={'#fff'} width={'40px'} />
          </a>
        </Link>
        <Link href={githubLink}>
          <a target="_blank" rel="noopener noreferrer">
            <SVGIcon name="github" fill={'#fff'} width={'40px'} />
          </a>
        </Link>
        <Link href={linkedinLink}>
          <a target="_blank" rel="noopener noreferrer">
            <SVGIcon name="linkedin" fill={'#fff'} width={'40px'} />
          </a>
        </Link>
      </div>
      <ul className={styles.footerNav}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/stories">STORIES</Link></li>
        <li><Link href="/features">FEATURES</Link></li>
        <li><Link href="/pricing">PRICING</Link></li>
      </ul>
      <button className={styles.footerInviteButton}>
        <span>GET AN INVITE</span>
        <div className="arrow">
          <SVGIcon name="arrow" fill={'#000'} />
        </div>
      </button>
      <div className={styles.copyright}>
        <h3>Copyright 2022. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;