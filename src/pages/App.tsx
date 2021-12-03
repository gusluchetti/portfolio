import React from 'react'
import { Container, Heading, Text, Flex, Divider } from '@chakra-ui/react'
import Navbar from '../components/navbar'

const App = () => (
  <Container py={4} px={[2, 4, 8]} maxW="container.xl">
    <Navbar />
    <Divider />
    <Flex direction="column">
      <Heading>Luchetti - Developer</Heading>
      <Text>Hi!</Text>
      <Text>This is my portfolio website.</Text>
      <Text>
        I'll be working on this for the next couple of weeks, so if there's anything incomplete,
        please check back in a few days!
      </Text>
    </Flex>
  </Container>
)

export default App
