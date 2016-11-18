import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      y: 0,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.setState({ y: window.pageYOffset || document.documentElement.scrollTop });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(e) {
    this.setState({ y: window.pageYOffset || document.documentElement.scrollTop });
  }

  render() {
    const { y } = this.state;
    return <nav className={`${styles.container} ${y > 200 && styles.offset}`}>
      <ul className={styles.navbar}>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  }

}

export default  Navigation;
