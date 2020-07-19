import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';
import HeaderComp from './HeaderComp';
import Home from './Home';
import Contact from './Contact';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const imgBg = "ui.webp"
AOS.init();
//const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
const App = () => {
  const titles = [
    { name: "Features", body: "Get the right users on your application to catch issues before they go to production", bodyTitle: "Get qualified testers" },
    { name: 'Contact', body: '+66 0 2722 9080 +66 8 5807 2443', bodyTitle: 'Phone' }
  ]

  const cards = [
    { icon: "fas fa-bullseye", name: "Target your audience", li: ["Get the right users using your site; we'll find the ones you're looking for"], href: "contact" },
    { icon: "fas fa-search", name: "Discover", li: ["Browse metrics and insights on user experiences"], href: "contact" },
    { icon: "fas fa-share-alt-square", name: "Share", li: ["Build a shared understanding of your experience and share it across your favorite tools"], href: "contact" }
  ]

  return (
    <Router>
      <div className="container">
        <header className="navbar d-flex align-items-baseline">
          <a href="/">
            <img src="nineweb_mod.png" className="App-logo" alt="logo" />
          <h1>{Text.NINE_WEB}</h1>
          </a>
          {/* mobile */}
          <div className="tabs-m dropdown">
            <i className="fas fa-bars"></i>
            <div className="dropdown-content">
              <ul className="list-group">
                {titles.map(title =>
                  <li key = {title.name} className="list-group-item">{title.name}</li>
                )}
              </ul>
            </div>

          </div>
          <ul className="tabs navbar-nav-scroll flex-grow-1">
            <div className="titles d-flex justify-content-between">
              {titles.map(title => {
                return <HeaderComp key={title.name} name={title.name} body={title.body} bodyTitle={title.bodyTitle} />
              })}
            </div>
          </ul>
          <span className="free">
            <Button variant="primary" href="/Contact">Try Nineweb for free</Button>
          </span>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home cards={cards} imgBg={imgBg} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
