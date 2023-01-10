import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import GradientIcon from './GradientIcon'
import EditRoundedIcon from '@mui/icons-material/EditRounded'

const EditButton = (props) => {
  const { onClick } = props
  const sx = { fill: 'url(#linearColors)', fontSize: '14px', mr: '5px' }
  return (
    <Flex alignItems="center" cursor="pointer" onClick={onClick}>
      <GradientIcon>
        <EditRoundedIcon sx={sx} />
      </GradientIcon>
      <Text
        fontSize="12px"
        fontWeight="bold"
        bgGradient="linear(to-b, #7CAAFF, #8D85F4)"
        bgClip="text"
      >
        編集
      </Text>
    </Flex>
  )
}

export default EditButton
