import React, { useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import { useState } from 'react'
import { Input } from '../Input'
import { InputContainer, Container, ListContainer } from './style'

const contries = [
  'Brazil',
  'Bralgica',
  'Brahamas',
  'Argentina',
  'Egito',
  'Equador',
  'Bolivia',
  'Armenia',
  'Uruguai',
  'França',
  'Australia',
  'Suriname',
  'Suiça',
  'Sinkedin',
]

export const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [open, setOpen] = useState(false)
  const [onClicked, setOnClicked] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)

    setOpen(true)
  }

  function setVisibleAndItemOnClicked(item) {

    setOnClicked(item)
    setOpen(false)
  }

  useEffect(() => {
    const results = contries.filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results)
  }, [searchTerm])

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search"
          value={!onClicked ? searchTerm : onClicked}
          onChange={handleChange}
        />
        <GoSearch color="#9a9a9a" size={22} style={{ marginLeft: '-40px', marginTop: '-5px' }} />
      </InputContainer>
      {open === true ? (
        <ListContainer>
          <ul style={{ listStyle: 'none' }}>
            {searchResults.map((item) => (
              <li style={{ cursor: 'pointer' }} onClick={() => setVisibleAndItemOnClicked(item)}>
                {item}
              </li>
            ))}
          </ul>
        </ListContainer>
      ) : (
          ''
      )}
    </Container>
  )
}
