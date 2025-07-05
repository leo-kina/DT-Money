import React, { createContext, useEffect, useState, type ReactNode } from 'react'
interface TransactionsPropr{
  id:number,
  description:string
  type:'income'| 'outcome'
  price:number
  category: string
  createdAt: string
}
interface TransactionContentType{
    transaction:TransactionsPropr[]
}
interface TransactionProviderProps{
    children:ReactNode
}
export const TrransactionContext = createContext({} as TransactionContentType)
  const [transaction, setTransaction] = useState<TransactionsPropr[]>([])
   async function  loadTransaction(){
  const responce =  await fetch('http://localhost:3000/transaction')
  const data = await responce.json()


  setTransaction(data)
  }
useEffect(()=>{

loadTransaction()
},[])
export const TransactionsContent = ({children}:TransactionProviderProps) => {
  return (
    
    <TrransactionContext.Provider value={{transaction}}> 
    {children}
    </TrransactionContext.Provider>
  )
}
