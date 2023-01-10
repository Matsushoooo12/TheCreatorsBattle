import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { useGetUrl } from '../../hooks/useGetUrl';
import { AuthContext } from '../../pages/_app';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const MainContainer = (props) => {
  const { children } = props;
  const {isLogin} = useContext(AuthContext)
  const {URL} = useGetUrl()
  return (
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
  )
}

export default MainContainer