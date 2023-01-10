import { HStack } from '@chakra-ui/react'
import React from 'react'

const TabItems = ({ children, mb }) => {
  return (
    <HStack spacing="16px" color="blue.800" fontWeight="bold" mb={mb}>
      {children}
    </HStack>
  )
}

export default TabItems
