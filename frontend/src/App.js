
import './App.css';
//import React from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreatePerson from './components/CreatePerson';
import CreateShip from './components/CreateShip';
import UpdatePerson from './components/UpdatePerson';
import UpdateShip from './components/UpdateShip';
import ListPersons from './components/ListPersons';
import ListShips from './components/ListShips';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React Testing</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create_person'} className="nav-link">Create Person</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create_ship'} className="nav-link">Create Ship</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list_persons'} className="nav-link">List Persons</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list_ships'} className="nav-link">List Ships</Link>
              </li>
              <li className="nav-item">
                <Link to={'/update_person'} className="nav-link">Update Person</Link>
              </li>
              <li className="nav-item">
                <Link to={'/update_ship'} className="nav-link">Update Ship</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h2>Welcome to diploma project!!!</h2> <br/>
        
        <Switch>
            <Route path='/create_person' component={CreatePerson}/>
            <Route path='/create_ship' component={CreateShip}/>
            <Route path='/list_persons' component={ListPersons}/>
            <Route path='/list_ships' component={ListShips}/>
            <Route path='/update_person' component={UpdatePerson}/>
            <Route path='/update_ship' component={UpdateShip}/>

        </Switch>
        </div>
    </Router>
  );
}


export default App;
