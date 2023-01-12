import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Wave from 'react-wavify'

const WaveItem = ({
  opacity,
  gradientId,
  speed,
  height,
  gradientColor1,
  gradientColor2,
  points,
  amplitude,
}) => {
  return (
    <Flex w='100%' h='240px' position='absolute' bottom='0' left='0'>
      <Wave
        fill={`url(#${gradientId})`}
        style={{ opacity: opacity }}
        options={{
          height: height,
          amplitude: amplitude,
          speed: speed,
          points: points,
        }}
      >
        <defs>
          <linearGradient id={gradientId} gradientTransform='rotate(90)'>
            <stop offset='10%' stopColor={gradientColor1} />
            <stop offset='90%' stopColor={gradientColor2} />
          </linearGradient>
        </defs>
      </Wave>
      <Image
        mb='56px'
        objectFit='cover'
        w='196px'
        h='21px'
        src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
        alt=''
        position='absolute'
        top='10'
        right='0'
        left='0'
        bottom='0'
        margin='auto'
      />
    </Flex>
  )
}

export default WaveItem
