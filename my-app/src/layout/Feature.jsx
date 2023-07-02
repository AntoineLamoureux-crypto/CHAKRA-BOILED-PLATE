import {
  Box,
  Heading,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMoreVertical,
} from 'react-icons/fi';

export const Feature = props => {
  const { label, value, icon, delta, ...boxProps } = props;
  return (
    <Box
      px={{
        base: '4',
        md: '3',
      }}
      py={{
        base: '5',
        md: '3',
      }}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      {...boxProps}
    >
      <Stack
        spacing={{
          base: '5',
          md: '6',
        }}
      >
        <Stack direction="row" justify="space-between">
          <HStack spacing="4">
            <Square size="12" borderRadius="md">
              <Icon as={icon} boxSize="6" color={'black'} />
            </Square>
            <Text fontWeight="medium" color={'gray.400'}>
              {label}
            </Text>
          </HStack>
          <Icon as={FiMoreVertical} boxSize="5" color="bg.300" />
        </Stack>
        <Stack spacing="4">
          <Heading
            size={{
              base: 'sm',
              md: 'md',
            }}
            color={'gray.400'}
          >
            {value}
          </Heading>
          <HStack spacing="1" fontWeight="medium">
            <Icon
              color={delta.isUpwardsTrend ? 'success' : 'error'}
              as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
              boxSize="5"
            />
            <Text color={delta.isUpwardsTrend ? 'success' : 'error'}>
              {delta.value}
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};
