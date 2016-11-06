import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';
import ActionBar from '../ActionBar';

class Intro extends React.Component {

  render() {
    return(
      <section className={styles.container}>
        <h1 className={styles.name}>Eufracia Marsella</h1>
        <span className={styles.title}>APPLICATION & WEB CODER in EDMONTON, ALBERTA. </span>
        <p className={styles.description}>Front and Back End Developer who is passionate to make simple, useful apps and websites.
        Friendly, easy going, and love to meet new people. <br /> </p>
        <span className={styles.jobPos}>OPEN for FREELANCE and FULL-TIME WORK. </span>
        <ActionBar />
      </section>
    )
  }
};

export default Intro;
