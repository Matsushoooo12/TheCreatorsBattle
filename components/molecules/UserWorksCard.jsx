import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const UserWorksCard = (props) => {
  const { thumbnail, title, categories, createdAt, onClick } = props
  return (
    <Flex
      w='328px'
      h='100%'
      bg='white'
      borderRadius='2xl'
      direction='column'
      boxShadow='lg'
    >
      <Flex w='100%' h='180px' borderTopRightRadius='2xl' position='relative'>
        <Image
          w='100%'
          h='100%'
          alt=''
          borderTopLeftRadius='2xl'
          borderTopRightRadius='2xl'
          src={thumbnail}
          objectFit='cover'
        />
      </Flex>
      <Flex w='100%' p='8px 16px 16px' direction='column'>
        <Heading fontSize='18px' mb='2px' onClick={onClick} cursor='pointer'>
          {title}
        </Heading>
        <Text fontWeight='bold' fontSize='12px' color='gray.400' mb='2px'>
          {categories?.map((c, index) => (index === 0 ? c : `・${c}`))}
        </Text>
        <HStack mb='2px'>
          <Flex
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            p='2px'
            borderRadius='full'
            alignItems='center'
            justifyContent='center'
          >
            <HStack
              borderRadius='full'
              bg='white'
              alignItems='center'
              justifyContent='center'
              p='4px 8px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                alt=''
              />
              <Text bg='white' fontSize='12px'>
                Next.js
              </Text>
            </HStack>
          </Flex>
          <Flex
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            p='2px'
            borderRadius='full'
            alignItems='center'
            justifyContent='center'
          >
            <HStack
              borderRadius='full'
              bg='white'
              alignItems='center'
              justifyContent='center'
              p='4px 8px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                alt=''
              />
              <Text bg='white' fontSize='12px'>
                TypeScript
              </Text>
            </HStack>
          </Flex>
          <Flex
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            p='2px'
            borderRadius='full'
            alignItems='center'
            justifyContent='center'
          >
            <HStack
              borderRadius='full'
              bg='white'
              alignItems='center'
              justifyContent='center'
              p='4px 8px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                alt=''
              />
              <Text bg='white' fontSize='12px'>
                Firebase
              </Text>
            </HStack>
          </Flex>
        </HStack>
        <Text fontWeight='bold' fontSize='12px' color='gray.400'>
          ⏱ {createdAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default UserWorksCard
