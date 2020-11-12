import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Products from './Components/Products';
import AddBook from './Components/AddBook';
import FindBook from './Components/FindBook';
import Login from './Components/Login';
import { useState } from 'react';


function App({ bookFacade }) {

  const [isloggedIn, setIsLoggedIn] =  useState(false);
  console.log(isloggedIn);
  return (
    <div>
      <Header isloggedIn={isloggedIn} loginMsg={isloggedIn ? 'Logout' : 'Login'} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={bookFacade} />
        </Route>
        <Route path='/find-book'>
          <FindBook bookFacade={bookFacade} />
        </Route>
        <Route path='/login'>
          <Login isLoggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} loginMsg={isloggedIn ? 'Logout' : 'Login'}g />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

const NoMatch = () => {
  return (
    <h4>No Match</h4>
  )
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

function Company() {
  return (
    <h2>Company</h2>
  )
}
export default App;
