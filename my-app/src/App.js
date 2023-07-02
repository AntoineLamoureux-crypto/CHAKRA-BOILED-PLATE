import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Content } from './layout/Content';
import { NavBar } from './layout/NavBar';

export default function App() {
  return (
    <Box
      as="section"
      height="100vh"
      overflowY="auto"
      bgColor={'white'}
      userSelect={'none'}
      alignContent={'center'}
    >
      <NavBar />
      <Box pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
        <Content />
      </Box>
    </Box>
  );
}
