import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Header from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/containers/Header.js';
import Footer from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/containers/Footer.js';

import Home from '//Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/containers/Home.js';
import Company from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/Company.js';
import Service from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/Service.js';
import PR from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/PR.js';
import FAQ from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/FAQ.js';
import Career from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/Career.js';
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path='/company'>
            <Company />
          </Route>
          <Route path='/service'>
            <Service />
          </Route>
          <Route path='/pr'>
            <PR />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/career'>
            <Career />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>home</h2>;
// }

// function Company() {
//   return <h2>company</h2>;
// }

// function Service() {
//   return <h2>service</h2>;
// }

// function PR() {
//   return <h2>PR</h2>;
// }

// function FAQ() {
//   return <h2>FAQ</h2>;
// }

// function Career() {
//   return <h2>career</h2>;
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
