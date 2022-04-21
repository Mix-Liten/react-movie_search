import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('components/Header', () => {
  it('should render same text passed into title prop', () => {
    render(<Header title="React Movie Search" />)
    const h1Element = screen.getByText(/React Movie Search/i)
    expect(h1Element).toBeInTheDocument()
  })
})
