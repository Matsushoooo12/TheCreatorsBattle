import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const TabItem = (props) => {
  const { title, onClick, tabState, tabIndex, dataLength } = props
  return (
    <Flex direction='column' onClick={onClick} cursor='pointer' h='34px'>
      <Flex mb='8px' alignItems='center'>
        <Text mr='2px'>{title}</Text>
        {dataLength && (
          <Center
            w='18px'
            h='18px'
            bgGradient='linear(to-r, #FF7C7C, #FF965B)'
            borderRadius='full'
          >
            <Text fontSize='12px' color='white'>
              {dataLength}
            </Text>
          </Center>
        )}
      </Flex>
      {tabState === tabIndex && (
        <Flex
          borderRadius='2xl'
          h='2px'
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        />
      )}
    </Flex>
  )
}

export default TabItem
