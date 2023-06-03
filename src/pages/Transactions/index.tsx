import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from '../../components/TransactionsTable'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionsTable />
    </>
  )
}
