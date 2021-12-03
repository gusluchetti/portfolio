import React from 'react'
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'

const Navbar = () => (
  <Flex>
    <Box p="2">
      <Heading size="md">luchetti.dev</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme="red" mr="4">
        Projects
      </Button>
      <Button colorScheme="red" mr="4">
        About
      </Button>
      <Button colorScheme="red">Contact</Button>
    </Box>
  </Flex>
)

export default Navbar