import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Navigation from '../Navigation';
import Intro from '../Intro';
import Timeline from '../Timeline';
import Projects from '../Projects';
import Footer from '../Footer';

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
      title='Eufracia'
      meta={[
        {
          property: 'og:title',
          content: 'Application & Web coder in Edmonton, Alberta.'
        },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]} />
        <Navigation />
        <Intro />
        <Timeline />
        <Projects />
        <Footer />
    </div>;
  }
}
