import * as React from 'react';
import { App } from '../pages/App';
import { ChakraProvider } from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
