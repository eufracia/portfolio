import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

class Navigation extends React.Component {
  render() {
    return (
      <ul className={styles.navbar}>
         <li><a href="#timeline">Timeline</a></li>
         <li><a href="#projects">Project</a></li>
      </ul>
    );
  }
}

export default  Navigation;
