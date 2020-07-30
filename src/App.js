import React from 'react';
import './App.css';
import HeaderComp from './HeaderComp';
import Home from './Home';
import Contact from './Contact';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

AOS.init();
//const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
const App = () => {
  const titles = [
    { name: 'Solutions', body: 'Get the right users on your application to catch issues before they go to production', bodyTitle: 'Get qualified Testers' },
    { name: 'Customers', body: '', bodyTitle: '' },
    { name: 'How it Works', body: '', bodyTitle: '' },
    { name: 'Resources', body: '', bodyTitle: '' },
    { name: 'Company', body: '', bodyTitle: '' }
  ]

  const cards = [
    { icon: "fas fa-bullseye", name: "Target your audience", li: ["Improve customer satisfaction"], href: "contact" },
    { icon: "fas fa-search", name: "Discover", li: ["Solving problems through empathy"], href: "contact" },
    { icon: "far fa-smile-beam", name: "Understand", li: ["Deeply understand the users' needs and objectives"], href: "contact" },
    { icon: "fas fa-share-alt-square", name: "Share", li: ["Generate real user interaction and target your audience"], href: "contact" }
  ]

  return (
    <Router>
      <div className="container">
        <header className="navbar d-flex align-items-baseline">
          <a href="/">
            <img src="nineweb_mod.png" className="App-logo" alt="logo" />
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
            <Button variant="primary" href="/Contact">Contact Us</Button>
          </span>
        </header>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home cards={cards} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <footer>
        </footer>
    </Router>
  );
}

export default App;
