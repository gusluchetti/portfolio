import * as React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

export const App = () => (
  //   <main style={pageStyles}>
  //     <title>Luchetti</title>
  //     <h1 style={headingStyles}>
  //       Hi!
  //       <br />
  //       <span style={headingAccentStyles}>This is my portfolio website!</span>
  //     </h1>
  //     <p style={paragraphStyles}>
  //       I'm working on my graduation thesis but I'm getting around to updating
  //       this website! soon!ᵗᵐ
  //     </p>
  //   </main>
  <Container maxW="container.xl" p={0}>
    <Heading>Luchetti - Developer</Heading>
    <Text>Hi!</Text>
    <Text>This is my portfolio website.</Text>
    <Text>
      I'll be working on this for the next couple of weeks, so if there's
      anything incomplete, check back in a few days.
    </Text>
  </Container>
);
