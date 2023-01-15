import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Wave from 'react-wavify'
import WaveItem from '../molecules/WaveItem'
import WaveContainer from '../organisms/WaveContainer'

const TopContainer = ({ children }) => {
  useEffect(() => {
    document.querySelector('.fluid')?.animate(
      {
        borderRadius: [
          '50% 50% 50% 70%/50% 50% 70% 60%',
          '80% 30% 50% 50%/50%',
          '40% 40% 50% 40%/30% 50% 40% 80%',
        ],
      },
      {
        iterations: Infinity,
        direction: 'alternate',
        duration: 7000,
      },
    )
  }, [])
  return (
    <Flex
      w='100%'
      minW='800px'
      h='100%'
      justifyContent='center'
      alignItems='center'
      direction='column'
      position='relative'
    >
      <Flex
        position='relative'
        direction='column'
        justifyContent='center'
        alignItems='center'
        zIndex={10}
        h='100%'
        w='100%'
      >
        {children}
      </Flex>
      <WaveContainer />
      {/* 流体シェイプ */}
      {/* <Flex w='100%' h='100vh' position='absolute' top='0' left='0'>
        <Flex
          className='fluid'
          position='absolute'
          opacity={0.2}
          top='0'
          left='0'
          right='0'
          bottom='0'
          margin='auto'
          w='300px'
          h='300px'
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        />
      </Flex> */}
    </Flex>
  )
}

export default TopContainer
