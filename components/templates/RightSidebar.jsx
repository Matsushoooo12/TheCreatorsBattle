import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { useGetUrl } from '../../hooks/useGetUrl';

const RightSidebar = () => {
  const router = useRouter();
  const {URL} = useGetUrl()
  console.log('URL', URL)
  return (
    <Flex
        w="400px"
        h="100vh"
        bg="white"
        justifyContent="flex-start"
        boxShadow="xl"
        p="40px 48px 40px 24px"
        color="#000"
    ></Flex>
  )
}

export default RightSidebar