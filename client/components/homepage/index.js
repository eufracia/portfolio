import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Intro from '../Intro';
import Timeline from '../Timeline';
import Projects from '../Projects';

export default class Homepage extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return <div>
      <Helmet
        title='Home page'
        meta={[
          {
            property: 'og:title',
            content: 'Golang Isomorphic React/Hot Reloadable/Redux/Css-Modules Starter Kit'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]} />
        <Intro />
        <Timeline />
        <Projects />
    </div>;
  }
}
