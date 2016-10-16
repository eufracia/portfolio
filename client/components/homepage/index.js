
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Intro from '../Intro';
import Experience from '../Experience.js';
import TechnicalSkills from '../TechnicalSkills.js';
import Projects from '../Projects.js';

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
          }
        ]} />
        <Intro />
        <Experience />
        <TechnicalSkills />
        <Projects />
    </div>;
  }

}
