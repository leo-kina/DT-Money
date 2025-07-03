import React from 'react'
import { Header } from '../../components/Header' // exemplo se o Header estiver em components
import { Summary } from '../../components/Summary'
import { TransactionsContainer,TransactionTable,PrinceHightLight } from './styles'
import { SearchForm } from './components/SearchForm'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary/>
      <TransactionsContainer>
        <SearchForm/>
      <TransactionTable>
        
        <tbody>
            
            <tr>
                <td width='50%'>Desenvolvimento de site</td>
                <td>
                    <PrinceHightLight variant='income'>
                        R$ 1.000,00
                        </PrinceHightLight></td>
                <td>Venda</td>
                <td>13/04/2022</td>
            </tr>
             <tr>
                <td width='50%'>Hamburguer</td>
                <td><PrinceHightLight variant='outcome'>
                    -R$ 20,00
                    </PrinceHightLight></td>
                <td>Alimentacao</td>
                <td>10/04/2022</td>
            </tr>
    
        </tbody>
      </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
