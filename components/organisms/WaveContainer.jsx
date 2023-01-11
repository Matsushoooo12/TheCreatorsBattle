import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import WaveItem from '../molecules/WaveItem'

const WaveContainer = () => {
  return (
    <Flex w="100%" position="absolute" bottom="0" left="0">
      <WaveItem
        opacity={0.6}
        gradientId="main"
        speed={0.15}
        height={30}
        gradientColor1="#C5B0FF99"
        gradientColor2="#8D85F4"
        points={4}
      />
      <WaveItem
        opacity={0.4}
        gradientId="main"
        speed={0.3}
        height={25}
        gradientColor1="#C5B0FF99"
        gradientColor2="#8D85F4"
        points={5}
      />
    </Flex>
  )
}

export default WaveContainer
