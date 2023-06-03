import { ReactNode } from 'react'
import { priceFormatter } from '../../../../utils/formatter'
import { SummaryCardContainer } from './styles'

interface SummaryCardProps {
  title: string
  amount: number
  icon: ReactNode
  variant?: 'green' | 'red'
}

export function SummaryCard({
  title,
  icon,
  amount,
  variant
}: SummaryCardProps) {
  return (
    <SummaryCardContainer variant={variant}>
      <header>
        <span>{title}</span>
        {icon}
      </header>

      <strong>{priceFormatter.format(amount)}</strong>
    </SummaryCardContainer>
  )
}
