import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NewCreateCard = (props) => {
  const { title, children, buttonText, onClick, isBoxShadow } = props
  return (
    <Flex
      direction='column'
      w='100%'
      p='16px 24px'
      borderRadius='lg'
      boxShadow={isBoxShadow && 'lg'}
      alignItems='center'
      justifyContent='center'
      color='black'
      bg='white'
    >
      <Text fontSize='18px' fontWeight='bold' mb='8px'>
        {title}
      </Text>
      <Flex direction='column' fontSize='14px' mb='18px'>
        {children}
      </Flex>
      <Text
        color='white'
        p='12px 24px'
        bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        borderRadius='md'
        fontSize='14px'
        fontWeight='bold'
        cursor='pointer'
        onClick={onClick}
      >
        {buttonText}
      </Text>
    </Flex>
  )
}

export default NewCreateCard
