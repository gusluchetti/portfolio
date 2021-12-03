import * as React from 'react'
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'

export const Navbar = () => (
  <Flex>
    <Box p="2">
      <Heading size="md">luchetti.dev</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme="teal" mr="4">
        About
      </Button>
      <Button colorScheme="teal">Contact</Button>
    </Box>
  </Flex>
)
