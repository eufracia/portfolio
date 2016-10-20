
import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

class Intro extends React.Component {
  render() {
    return(
      <section className={styles.container}>
        <div>Logo</div>
        <h1 className={styles.name}>Eufracia Marsella</h1>
        <p className={styles.description}>Hi! I'm an application and web developer based in Edmonton, Alberta.
        I'm passionate about learning new programming languages and build some
        applications from it. In my spare time, I love to dance, read some books,
        hangout with friends and try out new food. Let's meet and we can talk more!</p>
      </section>
    )
  }
};

export default Intro;
