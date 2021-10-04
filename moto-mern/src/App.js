import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import ShowVroom from './components/ShowVroom';
import VinVerify from './components/VinVerify';
import Contact from './components/Contact';
import coverImage from "./assets/cover/cover-image.jpg";

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
              </Switch>        
          </main>
        </div>
      </HashRouter>
    </body>
  );
}

export default App;
