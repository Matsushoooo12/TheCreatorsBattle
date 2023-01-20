import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import GradientIcon from './GradientIcon'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const ArrowLink = ({ text, onClick }) => {
  const sx = { fill: 'url(#linearColors)', fontSize: 20 }
  return (
    <HStack
      spacing='2px'
      bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
      bgClip='text'
      alignItems='center'
      cursor='pointer'
      onClick={onClick}
    >
      <Text fontSize='14px' fontWeight='bold'>
        {text}
      </Text>
      <GradientIcon>
        <ArrowCircleRightOutlinedIcon sx={sx} />
      </GradientIcon>
    </HStack>
  )
}

export default ArrowLink
