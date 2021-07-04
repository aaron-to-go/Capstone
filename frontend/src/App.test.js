import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const textElement = screen.getByText("Google Login");
  expect(textElement).toBeInTheDocument();
});
