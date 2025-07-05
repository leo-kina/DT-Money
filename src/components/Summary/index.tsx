import React, { useContext } from 'react'
import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TrransactionContext } from '../../contexts/TransactionsContent'

const {transaction} = useContext(TrransactionContext)
console.log(transaction)
export const Summary = () => {
  return (
    <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color='#00b37e'/>
            </header>
            <strong>R$ 17.400,00</strong>
        </SummaryCard>
                <SummaryCard>
            <header>
                <span>Saidas</span>
                <ArrowCircleDown size={32} color='#f75a68'/>
            </header>
            <strong>R$ 17.400,00</strong>
        </SummaryCard>        
        <SummaryCard variant='green'>
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color='#fff'/>
            </header>
            <strong>R$ 17.400,00</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}
