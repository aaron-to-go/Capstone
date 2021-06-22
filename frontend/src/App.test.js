import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String', () => {
  render(<App />);
  const linkElement = screen.getByText("This is a website");
  expect(linkElement).toBeInTheDocument();
});
