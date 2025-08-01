import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionContext"

export const useSummary= () =>{
    
const {transaction} = useContext(TransactionContext)

const summary = transaction.reduce((acc, transaction) =>{
    if(transaction.type == 'income'){
        acc.income += transaction.price
        acc.total += transaction.price
    }
    else{
        acc.outcome += transaction.price
        acc.total -= transaction.price
    }
    return acc
},{income:0, outcome:0, total:0})
return summary
}