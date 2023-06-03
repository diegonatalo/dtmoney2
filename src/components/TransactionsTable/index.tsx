import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import {
  PriceHighlight,
  TransactionsTableContainer,
  TransactionsTableContent
} from './styles'

export function TransactionsTable() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  )

  return (
    <TransactionsTableContainer>
      <TransactionsTableContent>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTableContent>
    </TransactionsTableContainer>
  )
}
