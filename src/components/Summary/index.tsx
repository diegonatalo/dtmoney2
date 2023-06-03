import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useSummary } from '../../hooks/useSummary'
import { SummaryCard } from './components/SummaryCard'
import { SummaryContainer } from './styles'

export function Summary() {
  const theme = useTheme()
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        icon={<ArrowCircleUp size={32} color={theme['green-300']} />}
        amount={summary.income}
      />
      <SummaryCard
        title="Saídas"
        icon={<ArrowCircleDown size={32} color={theme['red-300']} />}
        amount={summary.outcome}
      />
      <SummaryCard
        title="Total"
        icon={<CurrencyDollar size={32} color={theme.white} />}
        amount={summary.total}
        variant={summary.total > 0 ? 'green' : 'red'}
      />
    </SummaryContainer>
  )
}
