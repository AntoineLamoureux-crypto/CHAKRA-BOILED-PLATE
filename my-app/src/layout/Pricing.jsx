import React from 'react';
import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { PricingCard } from './PricingCard';
import { products } from './data';

export default function Pricing() {
  return (
    <Box as="section" p="20px">
      <Stack
        spacing={{
          base: '16',
          md: '24',
        }}
      >
        <Stack
          spacing={{
            base: '4',
            md: '6',
          }}
          textColor="black"
        >
          <Stack spacing="3">
            <Text fontWeight="semibold">Pricing</Text>
            <Heading
              size={{
                base: 'md',
                md: 'lg',
              }}
            >
              Get lifetime access
            </Heading>
          </Stack>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="fg.muted"
            maxW="3xl"
          >
            Get access to 210+ components and free updates. Customize it to your
            needs, and make it yours today!
          </Text>
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          columnGap="8"
          rowGap="6"
        >
          {products.map((product, id) => (
            <PricingCard key={id} product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
