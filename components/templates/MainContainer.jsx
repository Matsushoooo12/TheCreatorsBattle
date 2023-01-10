import { Center, Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const MainContainer = (props) => {
  const { children } = props;
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if(isSSR){
    return (
      <Center h="100vh" w="100%" bg="white">
        <Spinner thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl" 
        />
      </Center>
    )
  }
  return (
    <>
    {!isSSR && (
      <Flex>
        <LeftSidebar />
        <Flex
          flex={1}
          h="100vh"
          bg="gray.100"
          alignItems="center"
          direction="column"
          position="relative"
          minW="1024px"
        >
          <Flex h="100%" w="100%" overflowX="scroll" direction="column">
            {children}
          </Flex>
        </Flex>
        <RightSidebar />
    </Flex>
    )}
    </>
  )
}

export default MainContainer