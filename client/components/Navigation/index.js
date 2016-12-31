import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const empty = '';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    const { y } = this.position();
    this.state = { y };
    this.onScroll = this.onScroll.bind(this);
  }

  position() {
    if ( typeof window === 'undefined' ) {
      return { x: 0, y: 0 };
    }
    const doc = document.documentElement;
    const x = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const y = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    return { x, y };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(e) {
    const { y } = this.position();
    return this.setState({ y });
  }

  render() {
    const { y } = this.state;
    return <nav className={`${styles.container} ${ y > 150 ? styles.active : empty}`}>
      <ul className={styles.navbar}>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  }

}

export default  Navigation;
