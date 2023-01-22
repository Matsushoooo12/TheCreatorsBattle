import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useGetStatus } from '../../hooks/useGetStatus'

const ProjectCard = (props) => {
  const {
    title,
    categories,
    joinNumber,
    acquisitionPoints,
    untilTheDeadline,
    status,
    thumbnail,
    onClick,
  } = props
  const characterCountDisplay = (text) => {
    const string = text.substr(0, 13)
    if (text.length > 13) {
      return `${string}...`
    }
    return text
  }
  const { gradientColor, statusText } = useGetStatus(status)
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
          bg='gray.500'
          alt=''
          borderTopLeftRadius='2xl'
          borderTopRightRadius='2xl'
          src={thumbnail}
        />
        <Text
          position='absolute'
          top='16px'
          left='0'
          bgGradient={gradientColor()}
          color='white'
          p='4px 12px'
          fontSize='12px'
          fontWeight='bold'
          borderTopRightRadius='md'
          borderBottomRightRadius='md'
        >
          {statusText()}
        </Text>
      </Flex>
      <Flex w='100%' p='8px 16px 16px' direction='column'>
        <Heading fontSize='18px' mb='2px' cursor='pointer' onClick={onClick}>
          {characterCountDisplay(title)}
        </Heading>
        <Text fontWeight='bold' fontSize='12px' color='gray.400' mb='16px'>
          {categories?.map((c, index) => (index === 0 ? c : `・${c}`))}
        </Text>
        <HStack spacing='16px' w='100%'>
          <Flex
            w='33%'
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Text fontSize='11px'>🙋‍♀️ 人数</Text>
            <Text
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              {joinNumber}人
            </Text>
          </Flex>
          <Flex
            w='33%'
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Text fontSize='11px'>💰 獲得ポイント</Text>
            <Text
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              {acquisitionPoints}pt
            </Text>
          </Flex>
          <Flex
            w='33%'
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Text fontSize='11px'>💣 残り</Text>
            <Text
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              {untilTheDeadline}日
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default ProjectCard
