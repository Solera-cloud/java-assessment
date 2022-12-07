import React from 'react'
import styled from 'styled-components'

const MovieContainer = styled.div`
  display: flex;
  padding: 3rem;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  :hover {
    scale: 1.1;
  }
`
interface MovieProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const Movie = ({ firstName, lastName, phoneNumber, email }: MovieProps) => {

  return (
    <MovieContainer>
      <h4>{firstName}</h4>
      <h4>{lastName}</h4>
      <h4>{phoneNumber}</h4>
      <h4>{email}</h4>
    </MovieContainer>
  )
}


export default Movie