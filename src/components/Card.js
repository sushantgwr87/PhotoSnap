import React from 'react';
import Icon from './Icon';
import Image from 'next/image';
import styles from '../../styles/Card.module.css';
import Modal from './Modal';
import Link from 'next/link';

const Card = ({ imagePath, cardHead, cardBody, isModal = false, isbutton = true, isdark = true, isreverse = false, buttonText }) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={`${styles.card} ${isdark ? styles.card___dark : styles.card___light} ${isreverse && styles.card___reverse}`}>
            <div className={styles.card_photo}>
                <Image layout="fill" src={imagePath} alt='Card Image' />
            </div>
            <div className={styles.card_content}>
                <h3>{cardHead}</h3>
                <p>{cardBody}</p>
                {isbutton && (isModal ? (
                    <button className='card_btn___hover' onClick={() => setModalShow(true)}>
                        <span>{buttonText}</span>
                        <div className="arrow">
                            <Icon name="arrow" fill={isdark ? "#fff" : "#000"} />
                        </div>
                    </button>
                ) :
                    <Link href="/stories" passHref>
                        <a>
                            <button className='card_btn___hover'>
                                <span>{buttonText}</span>
                                <div className="arrow">
                                    <Icon name="arrow" fill={isdark ? "#fff" : "#000"} />
                                </div>
                            </button>
                        </a>
                    </Link>
                )
                }
                <Modal onClose={() => setModalShow(false)} show={modalShow} />
            </div>
        </div>
    );
};

export default Card;
