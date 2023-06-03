import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onClose={setOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
