import { createContext } from 'react'

export interface TransactionsPropr {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

export interface TransactionContentType {
  transaction: TransactionsPropr[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}


export const TransactionContext = createContext({} as TransactionContentType)
