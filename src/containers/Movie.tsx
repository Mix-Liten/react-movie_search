import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Header from '../components/Header'

const Container = styled.div`
  text-align: center;
`

const Movie = () => {
  return (
    <Container>
      <Header title="React Movie Search" />
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Card />
    </Container>
  )
}

export default Movie
