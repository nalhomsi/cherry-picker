import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Components
import Nav from './components/Nav';
import About from './components/About';
import ShowVroom from './components/ShowVroom';
import VinVerify from './components/VinVerify';
import Contact from './components/Contact';
import Login from './components/Login';
import MyGarage from './components/MyGarage';
import ProductList from './components/ProductList';
// Assets
import coverImage from "./assets/cover/cover-image.jpg";
// var cheerio = require("cheerio");
// var axios = require("axios");

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <body>
      <ApolloProvider client={client}>
      <HashRouter>
        <div>
          <Nav />
          <main>
          <img id="coverpic" src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
              <Switch>
                <Route exact={true} path='/' component={ShowVroom} />
                <Route exact path="/about" component={About} />
                <Route exact path='/showvroom' component={ShowVroom} />
                <Route exact path='/vinverify' component={VinVerify} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/mygarage' component={MyGarage} />
                <Route exact path='/productlist' component={ProductList} />
              </Switch>        
          </main>
        </div>
      </HashRouter>
      </ApolloProvider>
    </body>
  );
}

export default App;
