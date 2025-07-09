import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

// Tipo dos dados da transação
interface TransactionsPropr {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

// Tipo que será usado no contexto
interface TransactionContentType {
  transaction: TransactionsPropr[]
}

// Props do componente Provider
interface TransactionProviderProps {
  children: ReactNode
}

// ✅ Criando o contexto
export const TrransactionContext = createContext({} as TransactionContentType)

// ✅ Agora os hooks estão dentro do componente
export const TransactionsContent = ({ children }: TransactionProviderProps) => {
  const [transaction, setTransaction] = useState<TransactionsPropr[]>([])

  useEffect(() => {
    async function fetchTransactions() {
      const response = await fetch('http://localhost:3000/transaction')
      const data = await response.json()
      setTransaction(data)
    }

    fetchTransactions()
  }, [])

  return (
    <TrransactionContext.Provider value={{ transaction }}>
      {children}
    </TrransactionContext.Provider>
  )
}
