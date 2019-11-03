import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <br/>
    <h1>* * *</h1>
    <br/>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);