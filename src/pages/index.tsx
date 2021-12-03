import * as React from 'react'
import { App } from '../pages/App'
import { ChakraProvider } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default IndexPage
