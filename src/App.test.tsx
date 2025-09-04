import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders profile and projects heading', () => {
    render(<App />)
    expect(screen.getByText(/free4fun/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })
})
