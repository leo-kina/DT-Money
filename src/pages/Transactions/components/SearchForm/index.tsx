import React from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const SearchForm = () => {
  const {register, handleSubmit} = useForm()
  function handleSeachTransaction() {

  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransaction)}>
        <input type="text"
        placeholder='Busque por transacoes' 
        {...register('query')}/>
        <button type='submit'>
            <MagnifyingGlass size={20}/>
            Buscar
        </button>
    </SearchFormContainer>
  )
}
