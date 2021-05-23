// const chai = require("chai");
// const expect = chai.expect;
import * as React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const movieData = require('..../src/sample-data.js')

import App from './App';
import List from '../List/List';


test('renders the correct content', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  getByText('Rancid Tomatillos');
  getByText('Loading Movies...')
});

test('redirect from bad page', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  history.push('/some/bad/route')
  getByText('Rancid Tomatillos')
  })

test('allows users to view a specific movie', () => {
  const history = createMemoryHistory()
  const { getByAltText } = render(
    <Router history={history}>
      <App />
        <List movies={movieData.movies}/>
    </Router>
  );
  getByAltText('Money Plane');
})