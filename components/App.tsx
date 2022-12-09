import React, { useState } from 'react'
import { Input } from './components/Input'
import styled from 'styled-components'
import { SearchField } from './components/SearchField'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 600px;
  padding: 4rem 0px;
  @media screen and (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`

export const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [date, setDate] = useState('')

  return (
    <Container>
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        invalid={true}
        errorMessage="Email inválido"
      />

      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        invalid={false}
        errorMessage="Invalid password"
      />

      <SearchField />
    </Container>
  )
}
