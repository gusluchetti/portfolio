import * as React from 'react'
import { App } from '../pages/App'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}

export default IndexPage
