import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #ccc;

  p {
    margin: 0;
    display: inline-block;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      color: #0056b3;
    }
    &:visited {
      color: #007bff;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Copyright © 2022
        <a href="https://github.com/Mix-Liten" target="_blank" rel="noopener noreferrer">
          {' '}
          Mix-Liten
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
