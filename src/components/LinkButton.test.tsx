import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

it('renders link with text and href', () => {
  render(<LinkButton href="https://example.com" text="Example" icon={<span>Icon</span>} />);
  const link = screen.getByRole('link', { name: /example/i });
  expect(link).toHaveAttribute('href', 'https://example.com');
});