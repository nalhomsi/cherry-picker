import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// Components
import Nav from './components/Nav';
import About from './components/About';
import ShowVroom from './components/ShowVroom';
import VinVerify from './components/VinVerify';
import Contact from './components/Contact';
import Login from './components/Login';
// Assets
import coverImage from "./assets/cover/cover-image.jpg";
// var cheerio = require("cheerio");
// var axios = require("axios");

function App() {

  return (
    <body>
      <HashRouter>
        <div>
          <Nav />
          <main>
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
              <Switch>
                <Route exact={true} path='/' component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path='/showvroom' component={ShowVroom} />
                <Route exact path='/vinverify' component={VinVerify} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
              </Switch>        
          </main>
        </div>
      </HashRouter>
    </body>
  );
}

export default App;
