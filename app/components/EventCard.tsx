import React from 'react';
import styles from '../styles/EventCard.module.css';
import Image from 'next/image';

interface EventCardProps {
    title: string;
    date: string;
    imageSrc: string;
    altText: string;
    description:string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, imageSrc, altText,description }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <h3 className={styles.cardDate}>{date}</h3>
            <br />
            <div className={styles.cardImage}>
                <Image
                    src={imageSrc}
                    alt={altText}
                    width={750}
                    height={750}
                    layout="intrinsic"
                    priority
                />
            </div>
            <p>{description}</p>
        </div>
    );
};

export default EventCard;
