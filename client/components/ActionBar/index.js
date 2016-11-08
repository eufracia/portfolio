
import React from 'react';
import styles from './styles.css';

const defaultEmailSubject = 'Hello! Let\'s Chat :)';

const onEmailClick = () => {
    location.href = `mailto:ziporalicia@gmail.com?subject=${defaultEmailSubject}`
}

const onResumeClick = () => {
    location.href = `https://dl.dropboxusercontent.com/s/68m50gj8lykm07o/Eufracia%20Marsella%20-%20Resume-portfolio.pdf?dl=0`
}

export default () => <div className={styles.actionbar}>
  <button className={styles.button} onClick={onResumeClick}>Resume</button>
  <button className={`${styles.button} ${styles.invert}`} onClick={onEmailClick}>Let's Chat</button>
</div>