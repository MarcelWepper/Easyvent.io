import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import QR from './QR';
import Finder from './Location/Finder';
import Location from './Location/Location';
import Food from './Location/Food';
import Drinks from './Location/Drinks';
import './Home.css';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/qr' component={QR}/>
      <Route exact path='/location' component={Finder}/>
      <Route exact path='/location/tab-worms' component={Location}/>
      <Route exact path='/location/tab-worms/food' component={Food}/>
      <Route exact path='/location/tab-worms/drinks' component={Drinks}/>

    </Switch>
  </main>
)

export default Main
