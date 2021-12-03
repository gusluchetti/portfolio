import * as React from 'react'
import { Container, Heading, Text, Flex } from '@chakra-ui/react'
import { Navbar } from '../components/navbar'

export const App = () => (
  <Container maxW="container.xl" p={0}>
    <Navbar />
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
