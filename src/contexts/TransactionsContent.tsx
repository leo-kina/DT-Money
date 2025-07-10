import { useEffect, useState, type ReactNode } from 'react'
import { api } from '../lib/axios'
import {
  TransactionContext,
  type TransactionsPropr,
  type CreateTransactionInput
} from './TransactionContext'

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({ children }: TransactionProviderProps) => {
  const [transaction, setTransaction] = useState<TransactionsPropr[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc'
      }
    })

    let data = response.data

    if (query) {
      data = data.filter((transaction: TransactionsPropr) =>
        transaction.description.toLowerCase().includes(query.toLowerCase())
      )
    }

    setTransaction(data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data
    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })

    setTransaction((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transaction, fetchTransactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
