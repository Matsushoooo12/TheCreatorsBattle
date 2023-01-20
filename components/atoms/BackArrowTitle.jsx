import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const BackArrowTitle = ({ onClick, text }) => {
  return (
    <Flex
      color='blue.800'
      fontWeight='bold'
      fontSize='22px'
      mb='16px'
      alignItems='center'
      cursor='pointer'
      onClick={onClick}
    >
      <Icon as={IoIosArrowBack} mr='10px' />
      <Text>{text}</Text>
    </Flex>
  )
}

export default BackArrowTitle
