
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContent'


export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle/>
           <TransactionsProvider>
      <Transactions/>
 </TransactionsProvider>
    </ThemeProvider>

  )
}


