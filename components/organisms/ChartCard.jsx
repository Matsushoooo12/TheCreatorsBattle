import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ChartCard = (props) => {
  const { children, title } = props
  return (
    <Flex
      w='50%'
      bg='white'
      borderRadius='2xl'
      p='32px'
      fontWeight='bold'
      boxShadow='xl'
      direction='column'
      h='390px'
    >
      <Heading fontSize='20px' fontWeight='bold' color='blue.800' mb='16px'>
        {title}
      </Heading>
      {children}
    </Flex>
  )
}

export default ChartCard
