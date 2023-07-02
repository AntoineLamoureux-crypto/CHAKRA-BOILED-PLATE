import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Sidebar } from './SideBar';
import { ToggleButton } from './ToggleButton';

import { motion } from 'framer-motion';

export const NavBar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box as="nav" bg="white" boxShadow="sm">
      <Container
        py={{
          base: '4',
          lg: '5',
        }}
      >
        <Flex justify="space-between">
          <HStack spacing="4">
            {isDesktop && (
              <ButtonGroup variant="tertiary" spacing="1">
                <Button color={'gray.400'}>Home</Button>
                <Button color={'gray.400'} aria-current="page">
                  Dashboard
                </Button>
                <Button color={'gray.400'}>Tasks</Button>
                <Button color={'gray.400'}>Bookmarks</Button>
                <Button color={'gray.400'}>Users</Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4"></HStack>
          ) : (
            <>
              <ToggleButton
                isOpen={isOpen}
                aria-label="Open Menu"
                onClick={onToggle}
              />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
