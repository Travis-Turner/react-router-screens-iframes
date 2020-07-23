import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import './AboutMe.css';
import MyStory from './MyStory';
import Hobbies from './Hobbies';
import Contact from './Contact';

function AboutMe () {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <ul className="links">
        <li>
          <Link to={`${url}/my-story`}>Моя история</Link>
        </li>
        <li>
          <Link to={`${url}/hobbies`}>Хобби</Link>
        </li>
        <li>
          <Link to={`${url}/contact`}>Контактная информация</Link>
        </li>
      </ul>
      <Route path={`${path}/my-story`}>
        <MyStory />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Hobbies />
      </Route>
      <Route path={`${path}/contact`}>
        <Contact />
      </Route>
    </div>
  )
}

export default AboutMe;