import { Flex } from '@chakra-ui/react';
import React from 'react'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const MainContainer = (props) => {
  const { children } = props;
  return (
    <Flex suppressHydrationWarning>
        <LeftSidebar />
        <Flex
          suppressHydrationWarning
          flex={1}
          h="100vh"
          bg="gray.100"
          alignItems="center"
          direction="column"
          position="relative"
          minW="1024px"
        >
          <Flex suppressHydrationWarning h="100%" w="100%" overflowX="scroll" direction="column">
            {children}
          </Flex>
        </Flex>
        <RightSidebar />
    </Flex>
  )
}

export default MainContainer