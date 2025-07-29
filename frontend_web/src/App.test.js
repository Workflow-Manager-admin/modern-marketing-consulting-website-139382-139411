import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar with navigation links', () => {
  render(<App />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Why Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Work/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
