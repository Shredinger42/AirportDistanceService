import React, { Component } from 'react';
import { Route } from 'react-router';
import { DistanceCalculator } from './components/DistanceCalculator';
import { Layout } from './components/Layout';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
        <Layout>
              <Route path='/' component={DistanceCalculator} />
         </Layout>
    );
  }
}
