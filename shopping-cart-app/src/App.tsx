import React from 'react';

import { Switch, Route } from 'react-router'

import Home from './views/Home'
import Detail from './views/Detail'
import Cart from './views/Cart'

function App() {
  return (
    <div className="App">
     <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/detail/:id/:cid/:vid/:count" component={ Detail } />
      <Route path="/cart" component={ Cart } />
     </Switch>
    </div>
  );
}

export default App;
