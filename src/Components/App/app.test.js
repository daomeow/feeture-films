import * as React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  test('renders the correct content', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    getByText('Feeture🦶🏼Films');
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
    getByText('Feeture🦶🏼Films')
    });
})
