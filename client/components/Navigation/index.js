import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

class Navigation extends React.Component {

  render() {
    return <nav className={styles.container}>
      <ul className={styles.navbar}>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  }

}

export default  Navigation;
