import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import WaveItem from '../molecules/WaveItem'

const WaveContainer = () => {
  return (
    <Flex w='100%' position='absolute' bottom='0' left='0'>
      <WaveItem
        opacity={0.6}
        gradientId='main'
        speed={0.15}
        height={2}
        gradientColor1='#C5B0FF99'
        gradientColor2='#C1BFFF33'
        points={4}
        amplitude={30}
      />
      <WaveItem
        opacity={0.4}
        gradientId='main'
        speed={0.3}
        height={3}
        gradientColor1='#BADEFF00'
        gradientColor2='#92E5FF'
        points={5}
        amplitude={25}
      />
    </Flex>
  )
}

export default WaveContainer
