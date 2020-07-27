import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Review from './Review';
import Reviews from './Reviews';
import AboutMe from './AboutMe';


import { Route } from 'react-router-dom';

function App() {

  const [reviews, setReviews] = useState();
  // this hook is used only the first time the component launches
  useEffect(() => {
    // we're fetching the review data from the server
    fetch('https://api.nomoreparties.co/emoji-critic-rus').then((res) => {
      return res.json();
    }).then((parsedReviews) => {
      // we're formatting the data and using setData() to update our state
      const reviews = Object.values(parsedReviews);
      setReviews(reviews);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Route path={['/', '/index.html']}>
        <Dashboard />
      </Route>
      <Route path="/reviews">
        <Reviews reviews={reviews}/>
      </Route>
      <Route exact path="/reviews/:id">
        <Review reviews={reviews}/>
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route>
    </div>
  );
}

export default App;
