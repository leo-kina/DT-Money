import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/Logo (1).svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTranscationModal } from '../NewTranscationModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTranscationModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
