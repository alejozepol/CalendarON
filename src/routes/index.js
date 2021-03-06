import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../container/Home';
import '../assets/styles/app.scss';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
