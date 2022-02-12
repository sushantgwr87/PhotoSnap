import React from 'react';
import SVGIcon from './SVGIcon';
import Image from 'next/image';
import styles from '../../styles/card.module.css';

const Card = ({ imagePath, cardHead, cardBody, isbutton=true, isdark=true, isreverse=false, buttonText }) => {

    return (
        <div className={`${styles.card} ${isdark ? styles.card___dark : styles.card___light} ${isreverse && styles.card___reverse}`}>
            <div className={styles.card_photo}>
                <Image layout="fill" src={imagePath} alt='Card Image' />
            </div>
            <div className={styles.card_content}>
                <h3>{cardHead}</h3>
                <p>{cardBody}</p>
                {isbutton && (
                    <button>
                        <span>{buttonText}</span>
                        <div className="arrow">
                            <SVGIcon name="arrow" fill={isdark ? "#fff" : "#000"} />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
