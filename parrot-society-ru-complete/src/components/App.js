import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Friends from './Friends';
import Friend from './Friend';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import serverData from '../serverData';

function App() {
  return (
    <BrowserRouter basename={
      process.env.NODE_ENV === 'production'
        ? '/web-developer/widgets/react-parrot-society-ru-complete'
        : '/'
    }>
      <div className='App'>
        <header className="header">
          <NavLink to='/' className="header__logo">Parrot Friendship Society</NavLink>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item"><NavLink className="menu__link" to='/friends'>Друзья</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path={['/', '/index.html']}>
            <Dashboard />
          </Route>
          <Route exact path='/friends'>
            <Friends serverData={serverData} />
          </Route>
          <Route path='/friends/:id'>
            <Friend serverData={serverData} />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
