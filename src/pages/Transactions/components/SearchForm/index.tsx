import  { useContext } from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createTransacaoShema } from '../../../../schemas/searchSchema'
import { TransactionContext } from '../../../../contexts/TransactionContext'

type SearchForm = z.infer<typeof createTransacaoShema>

export const SearchForm = () => {
  const {fetchTransactions} = useContext(TransactionContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchForm>({
    resolver: zodResolver(createTransacaoShema)
  })

async function handleSeachTransaction(data: SearchForm) {
  console.log(data.query)
  await fetchTransactions(data.query) // correto, passando o valor da query
}

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
