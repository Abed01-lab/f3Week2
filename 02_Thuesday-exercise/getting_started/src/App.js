import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./style1.css";

import upper, { text1, text2, text3 } from "./file1";
import person, { males, females } from './file2';
import MultiWelcome from './file3';
const { firstName, email } = person;
const name = [...males, ...females];
const moreNames = [...males, 'Kurt', 'Helle', ...females, 'Tina'];
const personV2 = { ...person, friends: moreNames, phone: 12345678 };

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header />

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className='content'>
          <Switch>
            <Route exact path="/Exercise1">
              <Exercise1 />
            </Route>
            <Route path="/Exercise2">
              <Exercise2 />
            </Route>
            <Route path='/Exercise3'>
              <Exercise3 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


function Exercise1() {
  return (
    <div>
      <p>{upper('please upper case me')}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
     
    </div>
  );
}

function Exercise2() {
  return (
    <div>
      <p>{firstName}</p>
      <p>{email}</p>
      {console.log(name)}
      {console.log(moreNames)}
      {console.log(personV2)}
    </div>
  );
}

function Exercise3() {
  return (
    <div>
      <MultiWelcome />
    </div>
  )
}

function Header() {
  return (
    <ul className='header'>
      <li>
        <NavLink exact to="/Exercise1">Exercise 1</NavLink>
      </li>
      <li>
        <NavLink to="/Exercise2">Exercise 2</NavLink>
      </li>
      <li>
        <NavLink to='/Exercise3'>Exercise 3</NavLink>
      </li>
    </ul>
  )
}
