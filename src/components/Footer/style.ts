import styled from 'styled-components'

export const S = {
  Footer: styled.footer`
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
  `,
}
