import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
 import { Switch, Route} from 'react-router-dom';
import {About} from './container';
import './App.css';

function App () {
return(
  <>
    <Navbar />
    {/* <Switch>
      <Route exact path="/about" component={About}/>
    </Switch> */}
    <Header/>
    
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />  
    </>
);
}

export default App;
