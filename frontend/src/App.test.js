import {render} from '@testing-library/react';
import App from './App';
import {MemoryRouter as Router} from 'react-router-dom';

test("startingAppWithoutAnyCrashes", () => {
  render(<Router><App /></Router>);
});
