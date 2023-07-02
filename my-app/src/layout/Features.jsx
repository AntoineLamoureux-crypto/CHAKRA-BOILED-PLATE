import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { FiMail, FiSend, FiUsers } from 'react-icons/fi';
import { Feature } from './Feature';

const features = [
  {
    icon: FiUsers,
    label: 'Total Subscribers',
    value: '71,887',
    delta: { value: '320', isUpwardsTrend: true },
  },
  {
    icon: FiMail,
    label: 'Avg. Open Rate',
    value: '56.87%',
    delta: { value: '2.3%', isUpwardsTrend: true },
  },
  {
    icon: FiSend,
    label: 'Avg. Click Rate',
    value: '12.87%',
    delta: { value: '0.1%', isUpwardsTrend: false },
  },
];

export default function Features() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }}>
        {features.map((feature, id) => (
          <Feature key={id} {...feature} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
