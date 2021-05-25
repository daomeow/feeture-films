import * as React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
  test('renders the correct content', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    getByText('Feeture🦶🏼Films');
  })
});
