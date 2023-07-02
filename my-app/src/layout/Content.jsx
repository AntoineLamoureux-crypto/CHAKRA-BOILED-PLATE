import { VStack, Icon } from '@chakra-ui/react';
import RequestDemo from './RequestDemo';
import Pricing from './Pricing';
import { FiSearch } from 'react-icons/fi';
export const Content = () => (
  <VStack
    spacing="4"
    direction={{
      base: 'column',
      lg: 'row',
    }}
    justify="space-between"
  >
    <Icon as={FiSearch} />
    <RequestDemo />
    <Pricing />
  </VStack>
);
