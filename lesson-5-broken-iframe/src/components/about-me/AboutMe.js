import React from 'react';
import './AboutMe.css';
import { Route, Link } from 'react-router-dom';
import MyStory from './MyStory';
import Hobbies from './Hobbies';
import Contact from './Contact';

function AboutMe () {
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to="/my-story">Моя история</Link>
        </li>
        <li>
          <Link to="/hobbies">Хобби</Link>
        </li>
        <li>
          <Link to="/contact">Контактная информация</Link>
        </li>
      </ul>
      <Route path="/my-story">
        <MyStory />
      </Route>
      <Route path="/hobbies">
        <Hobbies />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  )
}

export default AboutMe;