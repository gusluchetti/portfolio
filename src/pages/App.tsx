import React from 'react'
import { Container, Heading, Text, Stack } from '@chakra-ui/react'
import Navbar from '../components/navbar'

const App = () => (
  <Container py={8} px={[4, 16, 24]} maxW="container.xl">
      <Heading>Luchetti - Developer</Heading>
      <Stack direction={["column", "row"]}>
        <Text>
        Hi! I'm Gustavo Luchetti, and this is my portfolio website. I'm 21 years old, and I'm currently doing a masters in Artificial Intelligence at Utrecht University, in the Netherlands. 
        </Text> 
        
        <Text>
          This is a constant WIP, since my current goal is to work in data science, not web/full-stack development, so if there's anything incomplete, please check back later!
        </Text>
    </Stack>
  </Container>
)

export default App
