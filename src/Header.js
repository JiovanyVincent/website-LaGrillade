import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { OrderOnline } from './components/OrderOnline';
import { Contact } from './components/Contact';

export class Header extends React.Component {
  render() {
    return (
      <Router>
        <div id="header" className="container">
          <nav>
            <ul>
              <li><Link className="link" to="/home">Home</Link></li>
              <li><Link className="link" to="/menu">Menu</Link></li>
              <li><Link className="link" to="/order-online">Order-online</Link></li>
              <li><Link className="link" to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <hr />
          <Route path="/home" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>  
    );
  }
}