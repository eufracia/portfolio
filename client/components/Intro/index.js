import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';
import ActionBar from '../ActionBar';

class Intro extends React.Component {

  render() {
    return(
      <section className={styles.container}>
        <h1 className={styles.name}>Eufracia Marsella</h1>
        <p className={styles.title}>APPLICATION & WEB CODER in EDMONTON, ALBERTA. </p>
        <p className={styles.description}>I am a Front and Back End Developer who is passionate to create simple, useful apps and websites.
        I'm friendly, easy going, and love to meet new people. <br /> </p>
        <span className={styles.jobPos}>Available for FREELANCE and FULL-TIME WORK. </span>
        <ActionBar />
      </section>
    )
  }
};

export default Intro;
