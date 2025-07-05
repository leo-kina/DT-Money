import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header' // exemplo se o Header estiver em components
import { Summary } from '../../components/Summary'
import { TransactionsContainer,TransactionTable,PrinceHightLight } from './styles'
import { SearchForm } from './components/SearchForm'
import { TrransactionContext } from '../../contexts/TransactionsContent'
import { dateFormatter, priceFormatter } from '../../utils/formatter'



export const Transactions = () => {
const {transaction} = useContext(TrransactionContext)
  return (
    <div>
      <Header />
      <Summary/>
      <TransactionsContainer>
        <SearchForm/>
      <TransactionTable>
        
        <tbody>
            {transaction.map((item)=>{
              return(
    <tr key={item.id}> 
                <td width='50%'>{item.description}</td>
                <td>
                    <PrinceHightLight variant={item.type}>
                      {item.type == 'outcome' && '- '}
                       {priceFormatter.format(item.price)}
                        </PrinceHightLight></td>
                <td>{item.category}</td>
                <td>{dateFormatter.format(new Date(item.createdAt))}</td>
            </tr>
              )
            })}
        
           
        </tbody>
      </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
