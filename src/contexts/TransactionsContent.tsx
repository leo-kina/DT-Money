import  { createContext, useEffect, useState, type ReactNode } from 'react'
import { api } from '../lib/axios'

interface TransactionsPropr {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransactionInput{
  description:string,
  price:number,
  category:string,
  type: 'income'| 'outcome'
}
interface TransactionContentType {
  transaction: TransactionsPropr[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TrransactionContext = createContext({} as TransactionContentType)


export const TransactionsContent = ({ children }: TransactionProviderProps) => {
  const [transaction, setTransaction] = useState<TransactionsPropr[]>([])

async function fetchTransactions(query?: string) {
  const response = await api.get('/transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
    },
  })

  let data = response.data

  if (query) {
    data = data.filter((transaction: TransactionsPropr) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    )
  }

  setTransaction(data)
}

async function createTransaction(data:CreateTransactionInput) {
     const{description, price, category, type} = data
  const response =await api.post('transactions',{
      description,
      price,
      category,
      type,
      createdAt: new Date(),
      
  })
  setTransaction(state =>[response.data, ...state])
}
  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TrransactionContext.Provider value={{ transaction, fetchTransactions,createTransaction }}>
      {children}
    </TrransactionContext.Provider>
  )
}
