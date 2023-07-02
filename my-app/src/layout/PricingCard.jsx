import {
  Box,
  Button,
  Circle,
  HStack,
  Heading,
  Icon,
  List,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const PricingCard = props => {
  const { product } = props;
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        bg="bg.surface"
        borderRadius="2xl"
        boxShadow="lg"
        px={{
          base: '6',
          md: '8',
        }}
        py="8"
      >
        <Stack spacing="8" textAlign="center" textColor="black">
          <Stack spacing="5" align="center">
            <Circle bg={mode('blue.50', 'whiteAlpha.50')} size="12">
              <Icon as={product.icon} boxSize="6" color="accent" />
            </Circle>
            <Stack>
              <Text fontSize="xl" color="accent" fontWeight="semibold">
                {product.name}
              </Text>
              <Heading
                size={{
                  base: 'md',
                  md: 'lg',
                }}
              >
                {product.price}
              </Heading>
              <Text color="fg.muted">{product.description}</Text>
            </Stack>
          </Stack>
          <List as="ul" spacing="4">
            {product.features.map(feature => (
              <HStack key={feature} as="li" spacing="3">
                <Circle size="6" bg={mode('blue.50', 'whiteAlpha.50')}>
                  <Icon as={FiCheck} />
                </Circle>
                <Text color="fg.muted">{feature}</Text>
              </HStack>
            ))}
          </List>
          <Button variant="primary" size="xl">
            Get started
          </Button>
        </Stack>
      </Box>
    </motion.div>
  );
};
