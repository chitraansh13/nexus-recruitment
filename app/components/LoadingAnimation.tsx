import React from 'react';
import styles from '../styles/LoadingAnimation.module.css';

const Loader: React.FC = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.circle}>
                <span className={styles.letter}>N</span>
            </div>
        </div>
    );
};

export default Loader;
