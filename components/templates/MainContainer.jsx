import { Flex } from '@chakra-ui/react'
import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const MainContainer = (props) => {
  const { children } = props
  return (
    <Flex fontFamily='body'>
      <LeftSidebar />
      <Flex
        flex={1}
        h='100vh'
        bg='gray.100'
        alignItems='center'
        direction='column'
        position='relative'
        minW='1024px'
        w='100%'
        overflowX='scroll'
      >
        <Flex h='100%' w='100%' direction='column' maxW='1600px'>
          {children}
        </Flex>
      </Flex>
      <RightSidebar />
    </Flex>
  )
}

export default MainContainer
