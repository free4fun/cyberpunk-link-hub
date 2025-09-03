import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('renders project info', () => {
  render(
    <ProjectCard
      href="https://example.com"
      title="My Project"
      description="A cool project"
    />
  );
  expect(screen.getByRole('link', { name: /my project/i })).toHaveAttribute('href', 'https://example.com');
  expect(screen.getByText(/a cool project/i)).toBeInTheDocument();
});