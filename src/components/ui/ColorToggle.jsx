import { Button, useColorMode } from '@chakra-ui/react'

export default function ColorToggle() {
  const { toggleColorMode } = useColorMode()
  return <Button onClick={toggleColorMode}>Tema degistir</Button>
}
