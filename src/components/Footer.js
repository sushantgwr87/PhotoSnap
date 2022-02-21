import React,{useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/footer.module.css';
import Icon from './Icon';
import Modal from './Modal';

const Footer = () => {
  const portfolioLink = "https://sushantgangwar.netlify.app/";
  const githubLink = "https://github.com/sushantgwr87";
  const linkedinLink = "https://www.linkedin.com/in/sushant-gangwar/";

  const [modalShow, setModalShow] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_Logo}>
        <Icon name="photosnap" fill={'#fff'} />
      </div>
      <div className={styles.footer_outLinks}>
        <Link href={portfolioLink}>
          <a target="_blank" rel="noopener noreferrer">
            <Icon name="sgwr" fill={'#000'} width={'38px'} />
          </a>
        </Link>
        <Link href={githubLink}>
          <a target="_blank" rel="noopener noreferrer">
            <Icon name="github" fill={'#fff'} width={'40px'} />
          </a>
        </Link>
        <Link href={linkedinLink}>
          <a target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" fill={'#fff'} width={'40px'} />
          </a>
        </Link>
      </div>
      <ul className={styles.footer_navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/stories">Stories</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
      </ul>
        <button className={styles.footer_modal___btn} onClick={() => setModalShow(true)}>
        <span>Get an invite</span>
        <div className="arrow">
          <Icon name="arrow" fill={'#000'} />
        </div>
      </button>
      <Modal onClose={() => setModalShow(false)} show={modalShow} />
      <div className={styles.footer_copyright}>
        <h3>Copyright 2022. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;