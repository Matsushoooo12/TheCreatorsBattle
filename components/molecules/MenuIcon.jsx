import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useGetUrl } from '../../hooks/useGetUrl'
import GradientIcon from '../atoms/GradientIcon'

const MenuIcon = ({children, onClick, url}) => {
    const {URL} = useGetUrl()
  return (
    <Flex
    suppressHydrationWarning
        p="20px"
        _hover={{ bg: "gray.100", cursor: "pointer" }}
        w="100%"
        justifyContent="center"
        mb="24px"
        position="relative"
        onClick={onClick}
      >
        <GradientIcon>
          {children}
        </GradientIcon>
        <Flex
        suppressHydrationWarning
          position="absolute"
          top="0"
          left="20px"
          w="100%"
          h="100%"
          alignItems="center"
        >
          <Flex
          suppressHydrationWarning
            w="4px"
            h="40px"
            bgGradient="linear(to-b, blue.400, purple.400)"
            borderRadius="md"
            display={URL === url ? 'block' : 'none'}
          ></Flex>
        </Flex>
      </Flex>
  )
}

export default MenuIcon