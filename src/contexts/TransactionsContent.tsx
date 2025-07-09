import React, { createContext, useEffect, useState, type ReactNode } from 'react'

interface TransactionsPropr {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContentType {
  transaction: TransactionsPropr[]   // plural seria mais comum, mas mantive singular conforme seu pedido
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TrransactionContext = createContext({} as TransactionContentType)

export const TransactionsContent = ({ children }: TransactionProviderProps) => {
  const [transaction, setTransaction] = useState<TransactionsPropr[]>([])

async function fetchTransactions(query?: string) {
  const response = await fetch('http://localhost:3000/transaction')
  const data = await response.json()

  if (query) {
    const filtered = data.filter((t: TransactionsPropr) =>
      t.description.toLowerCase().includes(query.toLowerCase())
    )
    setTransaction(filtered)
  } else {
    setTransaction(data)
  }
}


  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TrransactionContext.Provider value={{ transaction, fetchTransactions }}>
      {children}
    </TrransactionContext.Provider>
  )
}
