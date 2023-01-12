import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Wave from 'react-wavify'
import WaveItem from '../molecules/WaveItem'
import WaveContainer from '../organisms/WaveContainer'

const TopContainer = () => {
  return (
    <Flex
      w='100%'
      h='100%'
      justifyContent='center'
      alignItems='center'
      direction='column'
      position='relative'
    >
      <Image
        mb='56px'
        objectFit='cover'
        w='418px'
        h='45px'
        src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
        alt=''
      />
      <Text
        mb='16px'
        fontSize='42px'
        fontWeight='bold'
        bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        bgClip='text'
      >
        クリエイターの頂きへの挑戦状
      </Text>
      <Flex direction='column' fontSize='18px' fontWeight='bold'>
        <Text
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
          bgClip='text'
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
          bgClip='text'
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
          bgClip='text'
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
          bgClip='text'
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
      </Flex>
      <WaveContainer />
    </Flex>
  )
}

export default TopContainer
