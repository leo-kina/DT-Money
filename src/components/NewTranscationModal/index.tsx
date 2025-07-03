import React from 'react'
import * as Dialog  from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
export const NewTranscationModal = () => {
  return (
        <Dialog.Portal>
            <Overlay/>
                <Content>
                    <Dialog.Title>Nova Transacao</Dialog.Title>
                    <form action="">
                        <input type="text"placeholder='Descricao' required />
                        <input type="text"placeholder='Preco' required />
                        <input type="text"placeholder='Categoria' required />
                            <TransactionType>
                            <TransactionTypeButton variant='income' value='income'><ArrowCircleUp size={24}/>Entrada</TransactionTypeButton>
                            <TransactionTypeButton variant='outcome' value='outcome'><ArrowCircleDown/>Saida</TransactionTypeButton>
                        </TransactionType>
                        <button type='submit'>Cadastra</button>

                    </form>
                    <CloseButton>
                        <X/>
                    </CloseButton>
                </Content>
        </Dialog.Portal>
  )
}
