import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      {this.props.children}
      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600" rel="stylesheet" />
    </div>;
  }

}
