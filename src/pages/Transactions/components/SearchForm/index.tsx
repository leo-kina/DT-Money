import React from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
        <input type="text" />
        <button type='submit'>
            <MagnifyingGlass size={20}/>
            Buscar
        </button>
    </SearchFormContainer>
  )
}
