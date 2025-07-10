import { useContext } from 'react'
import * as Dialog  from '@radix-ui/react-dialog'
import { Controller, useForm ,} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {newTransactionSchema} from '../../schemas/newTransactionSchema'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { TrransactionContext } from '../../contexts/TransactionsContent'
export const NewTranscationModal = () => {
    type NewTransactionFormInput = z.infer<typeof newTransactionSchema>
    const {createTransaction} = useContext(TrransactionContext)
        const {
            register,
            handleSubmit,
            formState:{isSubmitting},
            control,
            reset

        } = useForm<NewTransactionFormInput>({
            resolver:zodResolver(newTransactionSchema),
        })
   async function handleCreateNewTransactio(data:NewTransactionFormInput){
    const{description, price, category, type} = data
await createTransaction({
    description,
    price,
    category,
    type
})
reset()
    }
  return (
<Dialog.Portal>
  <Overlay />
  <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
    <CloseButton>
      <X size={24}/>
    </CloseButton>



    <form onSubmit={handleSubmit(handleCreateNewTransactio)}>
      <input
        type="text"
        placeholder="Descrição"
        required
        {...register('description')}
      />
      <input
        type="number"
        placeholder="Preço"
        required
        {...register('price', { valueAsNumber: true })}
      />
      <input
        type="text"
        placeholder="Categoria"
        required
        {...register('category')}
      />
      
 <Controller control={control}
 name='type'
 render={({field}) => {

    return(

             <TransactionType  {...register('type')} value={field.value} onValueChange={field.onChange}>

        <TransactionTypeButton variant="income" value="income">
          <ArrowCircleUp size={24} />
          Entrada
        </TransactionTypeButton>
        <TransactionTypeButton variant="outcome" value="outcome">
          <ArrowCircleDown size={24} />
          Saída
        </TransactionTypeButton>
      </TransactionType>

    )

 }}/>

      <button type="submit" disabled={isSubmitting}>Cadastrar</button>
    </form>


  </Content>
</Dialog.Portal>


  )
}
