import { Flex, HStack, Icon, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRightCircle } from 'react-icons/bi'
import WaveContainer from '../../../components/organisms/WaveContainer'
import TopContainer from '../../../components/templates/TopContainer'

const CreateAccount = () => {
  return (
    <TopContainer>
      <Text mb='8px' fontSize='42px' fontWeight='bold' color='blue.800'>
        Create Account
      </Text>
      <Flex
        w='120px'
        h='4px'
        bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        mb='56px'
      />
      <VStack spacing='16px' w='400px' color='black' mb='56px'>
        <Input
          focusBorderColor='gray.400'
          placeholder='Mail Address'
          _placeholder={{ color: 'gray.400' }}
          bg='white'
          borderColor='gray.400'
        />
        <Input
          focusBorderColor='gray.400'
          placeholder='Passwords'
          _placeholder={{ color: 'gray.400' }}
          bg='white'
          borderColor='gray.400'
        />
      </VStack>
      <HStack
        spacing='6px'
        alignItems='center'
        justifyContent='center'
        w='400px'
        py='14px'
        bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        borderRadius='md'
        cursor='pointer'
        color='white'
      >
        <Text fontWeight='bold'>continue</Text>
        <Icon as={BiChevronRightCircle} />
      </HStack>
    </TopContainer>
  )
}

export default CreateAccount
