import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import system from './config'

export default function ChakraRoot({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}

ChakraRoot.propTypes = {
  children: PropTypes.node.isRequired,
}
