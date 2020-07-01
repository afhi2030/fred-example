import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Route path="/:category" exact component={Dashboard}/>
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
