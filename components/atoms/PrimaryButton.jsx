import { Flex } from '@chakra-ui/react'
import React from 'react'

const PrimaryButton = ({ children, onClick, mb }) => {
  return (
    <Flex
      p='12px 24px'
      bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
      borderRadius='md'
      cursor='pointer'
      color='white'
      onClick={onClick}
      mb={mb}
    >
      {children}
    </Flex>
  )
}

export default PrimaryButton
