import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'

const LeftSidebar = () => {
    const router = useRouter();
  return (
    <Flex
      bg="white"
      h="100vh"
      minW="96px"
      transition="all 0.3s ease-in-out"
      alignItems="flex-start"
      direction="column"
      boxShadow="lg"
    ></Flex>
  )
}

export default LeftSidebar