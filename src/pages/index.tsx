import * as React from 'react'
import { App } from '../pages/App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme'

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}

export default IndexPage
