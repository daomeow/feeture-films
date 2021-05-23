// const chai = require("chai");
// const expect = chai.expect;
import * as React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

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

  import { movieData } from '..../sample-data.js'
test('allows users to view a specific movie', async () => {
  const mockCreateItem = (api.createItem = jest.fn())  
})