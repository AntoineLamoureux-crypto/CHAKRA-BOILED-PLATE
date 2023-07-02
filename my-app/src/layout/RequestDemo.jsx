import React from 'react';
import { Box, Button, Heading, LightMode, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function RequestDemo() {
  return (
    <Box color="gray.700" pt="4.5rem">
      <Box mx="auto" px={{ base: '6', md: '8' }}>
        <Box textAlign="center">
          <Heading
            as="h1"
            size="3xl"
            fontWeight="extrabold"
            maxW="48rem"
            mx="auto"
            lineHeight="1.2"
            letterSpacing="tight"
          >
            Design collaboration without the chaos
          </Heading>
          <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </Box>

        <Stack
          justify="center"
          direction={{ base: 'column', md: 'row' }}
          mt="10"
          mb="20"
          spacing="4"
        >
          <LightMode>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                colorScheme="blackAlpha"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                Get started free
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                colorScheme="gray"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                Request demo
              </Button>
            </motion.div>
          </LightMode>
        </Stack>
      </Box>
    </Box>
  );
}
