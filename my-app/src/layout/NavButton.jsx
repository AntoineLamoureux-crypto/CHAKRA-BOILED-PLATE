import { Button, HStack, Icon, Text } from '@chakra-ui/react';

export const NavButton = props => {
  const { icon, label, ...buttonProps } = props;
  return (
    <Button variant="tertiary" justifyContent="start" {...buttonProps}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="gray.400" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
