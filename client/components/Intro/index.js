import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const defaultEmailSubject = 'Hello! Let\'s Chat :)';

class Intro extends React.Component {

  onEmailClick() {
    location.href = `mailto:ziporalicia@gmail.com?subject=${defaultEmailSubject}`
  }

  onResumeClick() {
    location.href = `https://dl.dropboxusercontent.com/s/n6nxnde4mg3o9fg/resume.pdf?dl=0`
  }

  render() {
    return(
      <section className={styles.container}>
        <h1 className={styles.name}>Eufracia Marsella</h1>
        <span className={styles.title}>APPLICATION & WEB CODER in EDMONTON, ALBERTA. </span>
        <p className={styles.description}>Front and Back End Developer who is passionate to make simple, useful apps and websites.
        Friendly, easy going, and love to meet new people. <br /> </p>
        <span className={styles.jobPos}>OPEN for FREELANCE and FULL-TIME WORK. </span>
        <div className={styles.actionbar}>
          <button className={styles.button} onClick={::this.onResumeClick}>Resume</button>
          <button className={`${styles.button} ${styles.invert}`} onClick={::this.onEmailClick}>Let's Chat</button>
        </div>
      </section>
    )
  }
};

export default Intro;
