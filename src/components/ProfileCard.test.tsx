import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

test('renders name and image', () => {
  render(<ProfileCard imageUrl="/test.jpg" name="Test User" />);
  expect(screen.getByRole('img', { name: /profile/i })).toHaveAttribute('src', '/test.jpg');
  expect(screen.getByText('Test User')).toBeInTheDocument();
});