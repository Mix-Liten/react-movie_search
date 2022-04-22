import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button'

const props = {
  title: 'More',
  onClick: jest.fn(),
}

describe('components/Button', () => {
  it('should render button element', () => {
    render(<Button title={props.title} onClick={props.onClick} />)
    const buttonElement = screen.getByRole('button', { name: /More/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render loading after click', () => {
    render(<Button title={props.title} onClick={props.onClick} />)
    const buttonElement = screen.getByRole('button', { name: /More/i })
    fireEvent.click(buttonElement)
    const loadingElement = screen.getByTestId('button-loading-text')
    expect(buttonElement.textContent).not.toBe(/More/i)
    expect(buttonElement).toContainElement(loadingElement)
  })
})
