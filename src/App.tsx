import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionsContent } from './contexts/TransactionsContent'

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle/>
           <TransactionsContent>
      <Transactions/>
 </TransactionsContent>
    </ThemeProvider>

  )
}


