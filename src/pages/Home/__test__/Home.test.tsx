import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Home from '../Home'

beforeEach(cleanup)

describe('<Home />', () => {
  it('render header', () => {
    render(<Home />)
    const element = screen.getByText(/React Movie Search/i)
    expect(element).toBeInTheDocument()
  })

  it('render footer', () => {
    render(<Home />)
    const element = screen.getByText(/Copyright © 2022/i)
    expect(element).toBeInTheDocument()
  })

  it('render movie container', () => {
    render(<Home />)
    const element = screen.getByLabelText(/Name/i)
    expect(element).toBeInTheDocument()
  })
})
