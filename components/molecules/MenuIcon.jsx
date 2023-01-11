import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useGetUrl } from '../../hooks/useGetUrl'
import GradientIcon from '../atoms/GradientIcon'

const MenuIcon = ({ children, onClick, url }) => {
  const { URL } = useGetUrl()
  return (
    <Flex
      p="20px"
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
      w="100%"
      justifyContent="center"
      mb="24px"
      position="relative"
      onClick={onClick}
    >
      <GradientIcon>{children}</GradientIcon>
      <Flex
        position="absolute"
        top="0"
        left="20px"
        w="100%"
        h="100%"
        alignItems="center"
      >
        <Flex
          w="4px"
          h="40px"
          bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
          borderRadius="md"
          display={URL === url ? 'block' : 'none'}
        ></Flex>
      </Flex>
    </Flex>
  )
}

export default MenuIcon
