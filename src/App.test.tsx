import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile and projects heading', () => {
  render(<App />);
  expect(screen.getByText(/free4fun/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
});